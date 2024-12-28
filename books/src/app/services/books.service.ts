import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../models/books';
import { Observable} from 'rxjs';
const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

    apiUrl: any;
    books: Books[] = [];
    categories: string[] = [];
    publishers: string[] = [];

    constructor(private http: HttpClient) { }

    getBooks(): Observable<Books[]> {
        return this.http.get<Books[]>(`${BASE_URL}/books`);
    }

    getCategories(): Observable<string[]> {
      return this.http.get<string[]>(`${BASE_URL}/categories`);
  }

  getPublishers(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/publishers`);
  }

    updateBooks(books: Books): Observable<Books> {
        return this.http.put<Books>(`${BASE_URL}/books/${books.id}`, books);
    }

    deleteBooks(booksId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/books/${booksId}`);
    }

    addBooks(newbooks: Books): Observable<Books> {
        const { id, ...booksWithoutId } = newbooks;
        return this.http.post<Books>(`${BASE_URL}/books`, booksWithoutId);
    }

    getBooksById(booksId: number): Observable<Books> {
        return this.http.get<Books>(`${BASE_URL}/books/${booksId}`);
    }
}
