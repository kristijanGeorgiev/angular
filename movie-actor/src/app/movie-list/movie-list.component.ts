import { Component, OnInit } from '@angular/core';
import { Movie } from '..//models/movie';
import { MovieService } from '..//services/movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{

  movies: Movie[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  
  genreFilter: string | undefined;
  genre: string[] = [];
  titleFilter: string = '';
  genres: string[] = [];
  genresLoaded: boolean = false;
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }
  sortByID(): void {
    // Toggle sort direction
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    // Sort movies by ID
    this.movies.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByTitle(): void {
    // Toggle sort direction
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    // Sort movies by title
    this.movies.sort((a, b) => {
      const titleA = a.title.toLowerCase(); // Case-insensitive comparison
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (titleA > titleB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0; // Titles are equal
    });
  }
  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
  }

  applyFilters(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = this.filterMovies(movies);
    });
  }

  filterMovies(movies: Movie[]): Movie[] {
    return movies.filter(movie =>
      this.filterByTitle(movie) &&
      this.filterByGenre(movie)
    );
  }

  filterByTitle(movie: Movie): boolean {
    return this.titleFilter === '' || movie.title.toLowerCase().includes(this.titleFilter.toLowerCase());
  }

  filterByGenre(movie: Movie): boolean {
    return this.genreFilter === undefined || this.genreFilter === '';
  }

  viewMovieDetails(movie: Movie): void {
    this.router.navigate(['/movie-detail', movie.id]);
  }

  editMovie(movie: Movie): void {
    this.router.navigate(['/movie-edit', movie.id]);
  }

  deleteMovie(movie: Movie): void {
    if (confirm('Do you want to delete the movie')) {
      this.movieService.deleteMovie(movie.id).subscribe(() => {
        this.getMovies();
      });
    }
  }
  getOscarEntries(oscars: { [key: string]: string }): { key: string; value: string }[] {
    return Object.entries(oscars).map(([key, value]) => ({ key, value }));
  }
}
