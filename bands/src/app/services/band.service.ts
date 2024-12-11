import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Band, Places } from '../models/band';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class BandService {

    apiUrl: any;
    bands: Band[] = [];
    places: Places[] = [];

    constructor(private http: HttpClient) { }
    getBands(): Observable<Band[]> {
      return this.http.get<Band[]>(`${BASE_URL}/bands`);
  }

  getGenres(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/genres`);
}

getPlaces(): Observable<Places[]> {
  return this.http.get<Places[]>(`${BASE_URL}/places`);
}

  updateBand(band: Band): Observable<Band> {
      return this.http.put<Band>(`${BASE_URL}/bands/${band.id}`, band);
  }

  deleteBand(bandId: number): Observable<void> {
      return this.http.delete<void>(`${BASE_URL}/bands/${bandId}`);
  }

  addBand(newband: Band): Observable<Band> {
      const { id, ...BandWithoutId } = newband;
      return this.http.post<Band>(`${BASE_URL}/bands`, BandWithoutId);
  }

  getBandById(bandId: number): Observable<Band> {
      return this.http.get<Band>(`${BASE_URL}/bands/${bandId}`);
  }
}
