import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, Actor } from '../models/movie';
import { Observable} from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    apiUrl: any;
    movies: Movie[] = [];
    actors: Actor[] = [];

    constructor(private http: HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${BASE_URL}/movies`);
    }

    getGenres(): Observable<string[]> {
      return this.http.get<string[]>(`${BASE_URL}/genres`);
  }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${BASE_URL}/actors`);
  }

    updateMovie(movie: Movie): Observable<Movie> {
        return this.http.put<Movie>(`${BASE_URL}/movies/${movie.id}`, movie);
    }

    deleteMovie(movieId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/movies/${movieId}`);
    }

    addMovie(newMovie: Movie): Observable<Movie> {
        const { id, ...movieWithoutId } = newMovie;
        return this.http.post<Movie>(`${BASE_URL}/movies`, movieWithoutId);
    }

    getMovieById(movieId: number): Observable<Movie> {
        return this.http.get<Movie>(`${BASE_URL}/movies/${movieId}`);
    }

}
