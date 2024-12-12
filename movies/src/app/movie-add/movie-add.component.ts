import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-add',
  standalone: false,
  
  templateUrl: './movie-add.component.html',
  styleUrl: './movie-add.component.css'
})
export class MovieAddComponent implements OnInit{
  newMovie: Movie = {id: 0, title: '', year: 0, director: '', genre: [], plot: '', oscars: {}, rating: 0, cast: []}
   oscarEntries: { key: string; value: string }[] = [];
   genre: string[] = [];
   constructor(private movieService: MovieService, private router: Router) {}
  ngOnInit(): void {
    this.getGenres();
  }
  addMovie(): void {
    this.movieService.addMovie(this.newMovie).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }
  goToMovieList(): void {
    this.router.navigate(['/movies']);
  }
  getOscarEntries(oscars: { [key: string]: string }): { key: string; value: string }[] {
    return Object.entries(oscars).map(([key, value]) => ({ key, value }));
  }
  addOscarField(): void {
    this.oscarEntries.push({ key: '', value: '' });
  }
addCastField(): void {
  this.newMovie.cast.push({ actor: '', character: '' });
}
getGenres(): void {
  this.movieService.getGenres().subscribe((genre) => {
    this.genre = genre;
  });
}
}
