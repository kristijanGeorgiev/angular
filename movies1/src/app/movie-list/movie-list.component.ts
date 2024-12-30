import { Component, OnInit } from '@angular/core';
import { Movie, Actor } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  standalone: false,
  
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  movies: Movie[] = [];
  genre: string[] = [];
  actors: Actor[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  titlefilter: string = '';
  genrefilter: string = '';
  genreloaded: boolean = false
  actorfilter: string = '';
  actorloaded: boolean = false;
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
    this.getGenres();
    this.getActors();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.movies.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByTitle(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';


    this.movies.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (titleA > titleB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
  }

  getGenres(): void {
    this.movieService.getGenres().subscribe((genre) => {
      this.genre = genre;
      this.genrefilter = '';
      this.genreloaded = true;
    });
  }

  getActors(): void {
    this.movieService.getActors().subscribe((actor) => {
      this.actors = actor;
      this.actorfilter = '';
      this.actorloaded = true;
    });
  }

  applyFilters(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies= this.filterMovies(movies);
    });
  }

  filterMovies(movies: Movie[]): Movie[] {
    return movies.filter(movie =>
      this.filterByTitle(movie) &&
      this.filterByGenre(movie) &&
      this.filterByActor(movie)
    )
  }

  filterByTitle(movie: Movie): boolean {
    return this.titlefilter === '' || movie.title.toLowerCase().includes(this.titlefilter.toLowerCase());
  }
  filterByGenre(movie: Movie): boolean {
    return (
      this.genrefilter === undefined ||
      this.genrefilter === '' ||
      movie.genre.includes(this.genrefilter)
    );
  }

  filterByActor(movie: Movie): boolean {
    return (
      this.actorfilter === undefined ||
      this.actorfilter === '' ||
      movie.cast.some((castMember) => 
        castMember.actor.toLowerCase().includes(this.actorfilter.toLowerCase())
      )
    );
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
