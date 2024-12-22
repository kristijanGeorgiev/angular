import { Component, OnInit } from '@angular/core';
import { Episode } from '../models/episode';
import { EpisodeService } from '../services/episode.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-episode-add',
  standalone: false,
  
  templateUrl: './episode-add.component.html',
  styleUrl: './episode-add.component.css'
})
export class EpisodeAddComponent implements OnInit{
  newEpisode: Episode = {id: 0, title: '', series: 0, era: '', broadcast_date: '', director: '', writer: '', plot: '', directors: [], companion: {actor: '', character: ''}, doctor: {actor: '', incarnation: ''}, cast: []}
  oscarEntries: { key: string; value: string }[] = [];
  directors: string[] = [];
  constructor(private episodeService: EpisodeService, private router: Router) {}
 ngOnInit(): void {
   this.getDirectors();
 }
 addEpisode(): void {
   this.episodeService.addEpisode(this.newEpisode).subscribe(() => {
     this.router.navigate(['/episodes']);
   });
 }
 goToEpisodeList(): void {
   this.router.navigate(['/episodes']);
 }
getDirectors(): void {
 this.episodeService.getDirectors().subscribe((director) => {
   this.directors = director;
 });
}
}
