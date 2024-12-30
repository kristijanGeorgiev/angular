import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, Actor } from '../models/movie';
import { Observable} from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
    actors: Actor[] = [];

    constructor(private http: HttpClient) { }

  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${BASE_URL}/actors`);
  }

    updateActor(actor: Actor): Observable<Actor> {
        return this.http.put<Actor>(`${BASE_URL}/actors/${actor.id}`, actor);
    }

    deleteActor(actorId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/actors/${actorId}`);
    }

    addActor(newActor: Actor): Observable<Actor> {
        const { id, ...actorWithoutId } = newActor;
        return this.http.post<Actor>(`${BASE_URL}/actors`, actorWithoutId);
    }

    getActorById(actorId: number): Observable<Actor> {
        return this.http.get<Actor>(`${BASE_URL}/actors/${actorId}`);
    }
}
