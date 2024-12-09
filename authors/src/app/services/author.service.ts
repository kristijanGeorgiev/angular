import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../models/author';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

    apiUrl: any;
    authors: Author[] = [];

    constructor(private http: HttpClient) { }
    getAuthors(): Observable<Author[]> {
      return this.http.get<Author[]>(`${BASE_URL}/authors`);
  }

  getNationalities(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/nationalities`);
}

  updateAuthor(author: Author): Observable<Author> {
      return this.http.put<Author>(`${BASE_URL}/authors/${author.id}`, author);
  }

  deleteAuthor(authorId: number): Observable<void> {
      return this.http.delete<void>(`${BASE_URL}/authors/${authorId}`);
  }

  addAuthor(newauthor: Author): Observable<Author> {
      const { id, ...authorWithoutId } = newauthor;
      return this.http.post<Author>(`${BASE_URL}/authors`, authorWithoutId);
  }

  getAuthorById(authorId: number): Observable<Author> {
      return this.http.get<Author>(`${BASE_URL}/authors/${authorId}`);
  }
}
