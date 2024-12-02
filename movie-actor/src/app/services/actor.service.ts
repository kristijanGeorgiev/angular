import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from '../models/actor';
import { Observable} from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class ActorService {
    apiUrl: any;
    actors: Actor[] = [];

    constructor(private http: HttpClient) { }

    getActor(): Observable<Actor[]> {
        return this.http.get<Actor[]>(`${BASE_URL}/actors`);
    }

    updateActor(actor: Actor): Observable<Actor> {
        return this.http.put<Actor>(`${BASE_URL}/actors/${actor.id}`, actor);
    }

    deleteActor(actorId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/actors/${actorId}`);
    }

    addActor(newactor: Actor): Observable<Actor> {
        const { id, ...actorWithoutId } = newactor;
        return this.http.post<Actor>(`${BASE_URL}/actors`, actorWithoutId);
    }

    getActorById(actorId: number): Observable<Actor> {
        return this.http.get<Actor>(`${BASE_URL}/actors/${actorId}`);
    }

}
