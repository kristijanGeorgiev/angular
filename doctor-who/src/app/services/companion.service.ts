import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Companions } from '../models/episode';
import { Observable} from 'rxjs';
const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class CompanionService {

    apiUrl: any;
    companions: Companions[] = [];

    constructor(private http: HttpClient) { }

    getCompanions(): Observable<Companions[]> {
        return this.http.get<Companions[]>(`${BASE_URL}/companions`);
    }

    updateCompanion(companion: Companions): Observable<Companions> {
        return this.http.put<Companions>(`${BASE_URL}/companions/${companion.id}`, companion);
    }

    deleteCompanion(CompanionId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/companions/${CompanionId}`);
    }

    addCompanion(newCompanion: Companions): Observable<Companions> {
        const { id, ...CompanionWithoutId } = newCompanion;
        return this.http.post<Companions>(`${BASE_URL}/companions`, CompanionWithoutId);
    }

    getCompanionById(CompanionId: number): Observable<Companions> {
        return this.http.get<Companions>(`${BASE_URL}/companions/${CompanionId}`);
    }
}
