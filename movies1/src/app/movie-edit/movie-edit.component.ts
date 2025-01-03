import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-movie-edit',
  standalone: false,
  
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.css'
})
export class MovieEditComponent implements OnInit{
  movie: Movie | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getMovieDetails();
    this.getMovies();
  }
  getMovieDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.movieService.getMovieById(+id).subscribe((movie) => {
        this.movie = movie;
      });
    }
  }
  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movie = this.movie;
    });
  }
  saveChanges(): void {
    if (this.movie) {
      this.movieService.updateMovie(this.movie).subscribe(() => {
        this.router.navigate(['/movie-detail', this.movie!.id]);
      });
    }
  }
  getOscarEntries(oscars: { [key: string]: string }): { key: string; value: string }[] {
    return Object.entries(oscars).map(([key, value]) => ({ key, value }));
  }
}