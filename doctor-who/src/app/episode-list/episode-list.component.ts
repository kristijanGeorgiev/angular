import { Component, OnInit } from '@angular/core';
import { Episode, Actor, Companion } from '../models/episode';
import { EpisodeService } from '../services/episode.service';
import { ActorService } from '../services/actor.service';
import { CompanionService } from '../services/companion.service';
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
  combodirector: string[] = [];
  comboactors: Actor[] = [];
  combocompanions: Companion[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  titlefilter: string = '';
  directorfilter: string = '';
  directorloaded: boolean = false
  actorfilter: string = '';
  actorloaded: boolean = false;
  companionfilter: string = '';
  companionloaded: boolean = false;
  constructor(private episodeService: EpisodeService, private companionservice: CompanionService, private actorservice: ActorService, private router: Router) { }

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
      this.combodirector = director;
      this.directorfilter = '';
      this.directorloaded = true;
    });
  }

  getActors(): void {
    this.actorservice.getActors().subscribe((actor) => {
      this.comboactors = actor;
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
      this.filterByActor(episode) &&
      this.filterByCompanion(episode)
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
      episode.cast.some((combocast) => 
        combocast.actor.toLowerCase().includes(this.actorfilter.toLowerCase())
      )
    );
  }
  //za interface
  filterByCompanion(episode: Episode): boolean {
    return (
      this.companionfilter === undefined ||
      this.companionfilter === '' ||
      episode.companion.actor.includes(this.companionfilter)
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
