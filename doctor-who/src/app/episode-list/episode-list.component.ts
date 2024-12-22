import { Component, OnInit } from '@angular/core';
import { Episode, Actor } from '../models/episode';
import { EpisodeService } from '../services/episode.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode-list',
  standalone: false,
  
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.css'
})
export class EpisodeListComponent implements OnInit{
  episodes: Episode[] = [];
  director: string[] = [];
  actors: Actor[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  titlefilter: string = '';
  directorfilter: string = '';
  directorloaded: boolean = false
  actorfilter: string = '';
  actorloaded: boolean = false;
  constructor(private episodeService: EpisodeService, private router: Router) { }

  ngOnInit(): void {
    this.getEpisodes();
    this.getDirectors();
    this.getActors();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.episodes.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByTitle(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';


    this.episodes.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (titleA > titleB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  getEpisodes(): void {
    this.episodeService.getEpisodes().subscribe((episodes) => {
      this.episodes = episodes;
      console.log(episodes);
    });
  }

  getDirectors(): void {
    this.episodeService.getDirectors().subscribe((director) => {
      this.director = director;
      this.directorfilter = '';
      this.directorloaded = true;
    });
  }

  getActors(): void {
    this.episodeService.getActors().subscribe((actor) => {
      this.actors = actor;
      this.actorfilter = '';
      this.actorloaded = true;
    });
  }

  applyFilters(): void {
    this.episodeService.getEpisodes().subscribe((episodes) => {
      this.episodes= this.filterEpisodes(episodes);
    });
  }

  filterEpisodes(episodes: Episode[]): Episode[] {
    return episodes.filter(episode =>
      this.filterByTitle(episode) &&
      this.filterByDirector(episode) &&
      this.filterByActor(episode)
    )
  }

  filterByTitle(episode: Episode): boolean {
    return this.titlefilter === '' || episode.title.toLowerCase().includes(this.titlefilter.toLowerCase());
  }
  // za niza
  filterByDirector(episode: Episode): boolean {
    return (
      this.directorfilter === undefined ||
      this.directorfilter === '' ||
      episode.director.includes(this.directorfilter)
    );
  }
  // za niza od interfajsi
  filterByActor(episode: Episode): boolean {
    return (
      this.actorfilter === undefined ||
      this.actorfilter === '' ||
      episode.cast.some((castMember) => 
        castMember.actor.toLowerCase().includes(this.actorfilter.toLowerCase())
      )
    );
  }
  //za interface
  filterByCompanion(episode: Episode): boolean {
    return (
      this.actorfilter === undefined ||
      this.actorfilter === '' ||
      episode.companion.actor.includes(this.actorfilter)
    );
  }
  viewEpisodeDetails(episode: Episode): void {
    this.router.navigate(['/episode-detail', episode.id]);
  }

  editEpisode(episode: Episode): void {
    this.router.navigate(['/episode-edit', episode.id]);
  }

  deleteEpisode(episode: Episode): void {
    if (confirm('Do you want to delete the episode')) {
      this.episodeService.deleteEpisode(episode.id).subscribe(() => {
        this.getEpisodes();
      });
    }
  }
}
