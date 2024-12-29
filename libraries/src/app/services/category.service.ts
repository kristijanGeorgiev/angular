import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/book';
import { Observable} from 'rxjs';
const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    apiUrl: any;
    categories: Category[] = [];

    constructor(private http: HttpClient) { }

    getCategory(): Observable<Category[]> {
        return this.http.get<Category[]>(`${BASE_URL}/categories`);
    }

    getCategories(): Observable<Category[]> {
      return this.http.get<Category[]>(`${BASE_URL}/categories`);
  }

    updateCategory(Category: Category): Observable<Category> {
        return this.http.put<Category>(`${BASE_URL}/categories/${Category.id}`, Category);
    }

    deleteCategory(CategoryId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/categories/${CategoryId}`);
    }

    addCategory(newCategory: Category): Observable<Category> {
        const { id, ...CategoryWithoutId } = newCategory;
        return this.http.post<Category>(`${BASE_URL}/categories`, CategoryWithoutId);
    }

    getCategoryById(CategoryId: number): Observable<Category> {
        return this.http.get<Category>(`${BASE_URL}/categories/${CategoryId}`);
    }
}