import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publisher } from '../models/book';
import { Observable} from 'rxjs';
const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class PublisherService {

    apiUrl: any;
    publishers: Publisher[] = [];

    constructor(private http: HttpClient) { }

  getPublishers(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(`${BASE_URL}/publishers`);
  }

    updatePublisher(Publisher: Publisher): Observable<Publisher> {
        return this.http.put<Publisher>(`${BASE_URL}/publishers/${Publisher.id}`, Publisher);
    }

    deletePublisher(PublisherId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/publishers/${PublisherId}`);
    }

    addPublisher(newPublisher: Publisher): Observable<Publisher> {
        const { id, ...PublisherWithoutId } = newPublisher;
        return this.http.post<Publisher>(`${BASE_URL}/publishers`, PublisherWithoutId);
    }

    getPublisherById(PublisherId: number): Observable<Publisher> {
        return this.http.get<Publisher>(`${BASE_URL}/publishers/${PublisherId}`);
    }
}
