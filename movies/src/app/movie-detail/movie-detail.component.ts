import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-detail',
  standalone: false,
  
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{
  movie: Movie | undefined
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }
  ngOnInit(): void {
    this.getMovieDetails();
  }
  getMovieDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.movieService.getMovieById(+id).subscribe((movie: Movie| undefined) => {
        this.movie= movie;
      });
    }
  }
  getOscarEntries(oscars: { [key: string]: string }): { key: string; value: string }[] {
    return Object.entries(oscars).map(([key, value]) => ({ key, value }));
  }
}
