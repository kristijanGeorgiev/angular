import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeService } from '../services/episode.service';
import { Episode} from '../models/episode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episode-detail',
  standalone: false,
  
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.css'
})
export class EpisodeDetailComponent implements OnInit{
  episode: Episode | undefined
  constructor(private route: ActivatedRoute, private episodeService: EpisodeService) { }
  ngOnInit(): void {
    this.getEpisodeDetails();
  }
  getEpisodeDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.episodeService.getEpisodeByID(+id).subscribe((episode: Episode| undefined) => {
        this.episode= episode;
      });
    }
  }
}
