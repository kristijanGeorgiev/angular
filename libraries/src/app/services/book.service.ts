import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable} from 'rxjs';
const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

    apiUrl: any;
    books: Book[] = [];
    categories: string[] = [];
    publishers: string[] = [];

    constructor(private http: HttpClient) { }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(`${BASE_URL}/books`);
    }

    getCategories(): Observable<string[]> {
      return this.http.get<string[]>(`${BASE_URL}/categories`);
  }

  getPublishers(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/publishers`);
  }

    updateBooks(books: Book): Observable<Book> {
        return this.http.put<Book>(`${BASE_URL}/books/${books.id}`, books);
    }

    deleteBooks(booksId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/books/${booksId}`);
    }

    addBooks(newbooks: Book): Observable<Book> {
        const { id, ...booksWithoutId } = newbooks;
        return this.http.post<Book>(`${BASE_URL}/books`, booksWithoutId);
    }

    getBooksById(booksId: number): Observable<Book> {
        return this.http.get<Book>(`${BASE_URL}/books/${booksId}`);
    }
}