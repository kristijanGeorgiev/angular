import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people';
import { Observable } from 'rxjs'; 
const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

    apiUrl: any;
    people: People[] = [];
    hobbies: string[] = [];

    constructor(private http: HttpClient) { }

    getPeople(): Observable<People[]> {
        return this.http.get<People[]>(`${BASE_URL}/people`);
    }

    getHobbies(): Observable<string[]> {
      return this.http.get<string[]>(`${BASE_URL}/hobbies`);
  }
    updatePeople(people: People): Observable<People> {
        return this.http.put<People>(`${BASE_URL}/people/${people.id}`, people);
    }

    deletePeople(peopleId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/people/${peopleId}`);
    }

    addPeople(newPeople: People): Observable<People> {
        const { id, ...peopleWithoutId } = newPeople;
        return this.http.post<People>(`${BASE_URL}/people`, peopleWithoutId);
    }

    getPeopleById(peopleId: number): Observable<People> {
        return this.http.get<People>(`${BASE_URL}/people/${peopleId}`);
    }
}
