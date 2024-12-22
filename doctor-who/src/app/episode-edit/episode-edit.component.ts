import { Component, OnInit } from '@angular/core';
import { Episode } from '../models/episode';
import { CommonModule } from '@angular/common';
import { EpisodeService } from '../services/episode.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-episode-edit',
  standalone: false,
  
  templateUrl: './episode-edit.component.html',
  styleUrl: './episode-edit.component.css'
})
export class EpisodeEditComponent implements OnInit{
  episode: Episode| undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private episodeService: EpisodeService
  ) {}

  ngOnInit(): void {
    this.getEpisodeDetails();
    this.getEpisodes();
  }
  getEpisodeDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.episodeService.getEpisodeById(+id).subscribe((episode) => {
        this.episode = episode;
      });
    }
  }
  getEpisodes(): void {
    this.episodeService.getEpisodes().subscribe((episodes) => {
      this.episode = this.episode;
    });
  }
  saveChanges(): void {
    if (this.episode) {
      this.episodeService.updateEpisode(this.episode).subscribe(() => {
        this.router.navigate(['/episode-detail', this.episode!.id]);
      });
    }
  }
}
