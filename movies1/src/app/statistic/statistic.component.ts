import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, Actor } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { BehaviorSubject } from 'rxjs';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-statistic',
  standalone: false,
  
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css'
})
export class StatisticComponent implements OnInit{
  movies: Movie[] = [];
  actors: Actor[] = [];
  genres: string[] = [];
  constructor(private route: ActivatedRoute, private movieservice: MovieService, private actorservice: ActorService) { }
  ngOnInit(): void {
    this.getMovies();
    this.getGenres();
    this.getActors();
  }
 
  getMovies(): void {
    this.movieservice.getMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
  }
  getGenres(): void {
    this.movieservice.getGenres().subscribe((genres) => {
      this.genres = genres;
      console.log(genres);
    });
  }
  getActors(): void {
    this.actorservice.getActors().subscribe((actors) => {
      this.actors = actors;
      console.log(actors)
    });
  }
}
