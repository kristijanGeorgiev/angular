import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode, Companions, Actor } from '../models/episode';
import { EpisodeService } from '../services/episode.service';
import { BehaviorSubject } from 'rxjs';
import { CompanionService } from '../services/companion.service';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-statistic',
  standalone: false,
  
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css'
})
export class StatisticComponent implements OnInit{
  episodes: Episode[] = [];
  companions: Companions[] = [];
  actors: Actor[] = [];
  directors: string[] = [];
  constructor(private route: ActivatedRoute, private episodeservice: EpisodeService, private companionservice: CompanionService, private actorservice: ActorService) { }
  ngOnInit(): void {
    this.getEpisodes();
    this.getCompanions();
    this.getActors();
    this.getDirectors();
  }
 
  getEpisodes(): void {
    this.episodeservice.getEpisodes().subscribe((episodes) => {
      this.episodes = episodes;
      console.log(episodes);
    });
  }
  getCompanions(): void {
    this.companionservice.getCompanions().subscribe((companions) => {
      this.companions = companions;
      console.log(companions)
    });
  }

  getActors(): void {
    this.actorservice.getActors().subscribe((actors) => {
      this.actors = actors;
      console.log(actors);
    });
  }

  getDirectors(): void {
    this.episodeservice.getDirectors().subscribe((directors) => {
      this.directors = directors;
      console.log(directors);
    });
  }
}
