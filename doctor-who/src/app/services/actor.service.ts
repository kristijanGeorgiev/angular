import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from '../models/episode';
import { Observable} from 'rxjs';
const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ActorService {

    apiUrl: any;
    actors: Actor[] = [];

    constructor(private http: HttpClient) { }

    getActors(): Observable<Actor[]> {
        return this.http.get<Actor[]>(`${BASE_URL}/actors`);
    }

    updateActor(Actor: Actor): Observable<Actor> {
        return this.http.put<Actor>(`${BASE_URL}/actors/${Actor.id}`, Actor);
    }

    deleteActor(ActorId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/actors/${ActorId}`);
    }

    addActor(newActor: Actor): Observable<Actor> {
        const { id, ...ActorWithoutId } = newActor;
        return this.http.post<Actor>(`${BASE_URL}/actors`, ActorWithoutId);
    }

    getActorById(ActorId: number): Observable<Actor> {
        return this.http.get<Actor>(`${BASE_URL}/actors/${ActorId}`);
    }
}
