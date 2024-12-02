import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie';
@Component({
  selector: 'app-movie-add',
  standalone: false,
  templateUrl: './movie-add.component.html',
  styleUrl: './movie-add.component.css'
})
export class MovieAddComponent {
   newMovie: Movie = {id: 0, title: '', year: 0, director: '', genre: [], plot: '', oscars: {}, rating: 0, cast: []}
   oscarEntries: { key: string; value: string }[] = [];
   constructor(private movieService: MovieService, private router: Router) {}
   addMovie(): void {
    this.newMovie.oscars = {};
    this.oscarEntries.forEach((entry) => {
      if (entry.key && entry.value) {
        this.newMovie.oscars[entry.key] = entry.value;
      }
    });
    this.movieService.addMovie(this.newMovie).subscribe(() => {
      this.router.navigate(['/movie-list']);
    });
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
}
