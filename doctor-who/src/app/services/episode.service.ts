import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode, Companion, Actor } from '../models/episode';
import { Observable} from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

    apiUrl: any;
    episodes: Episode[] = [];
    directors: string[] = [];
    actors: Actor[] = [];
    constructor(private http: HttpClient) { }

    getEpisodes(): Observable<Episode[]> {
      return this.http.get<Episode[]>(`${BASE_URL}/episodes`);
  }

  getDirectors(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/directors`);
}

getActors(): Observable<Actor[]> {
  return this.http.get<Actor[]>(`${BASE_URL}/actors`);
}

  updateEpisode(episode: Episode): Observable<Episode> {
      return this.http.put<Episode>(`${BASE_URL}/episodes/${episode.id}`, episode);
  }

  deleteEpisode(id: number): Observable<void> {
      return this.http.delete<void>(`${BASE_URL}/episodes/${id}`);
  }

  addEpisode(newEpisode: Episode): Observable<Episode> {
      const { id, ...episodeWithoutid } = newEpisode;
      return this.http.post<Episode>(`${BASE_URL}/episodes`, episodeWithoutid);
  }

  getEpisodeByID(id: number): Observable<Episode> {
      return this.http.get<Episode>(`${BASE_URL}/episodes/${id}`);
  }
}