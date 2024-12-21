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
    const rank = this.route.snapshot.paramMap.get('rank');
    
    if (rank) {
      this.episodeService.getEpisodeByRank(+rank).subscribe((episode: Episode| undefined) => {
        this.episode= episode;
      });
    }
  }
}
