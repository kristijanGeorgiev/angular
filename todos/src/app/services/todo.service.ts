import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

    apiUrl: any;
    todos: Todo[] = [];

    constructor(private http: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${BASE_URL}/todos`);
    }

    updateTodo(todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(`${BASE_URL}/todos/${todo.id}`, todo);
    }

    deleteTodo(todoId: number): Observable<void> {
        return this.http.delete<void>(`${BASE_URL}/todos/${todoId}`);
    }

    addTodo(newTodo: Todo): Observable<Todo> {
        const { id, ...todoWithoutId } = newTodo;
        return this.http.post<Todo>(`${BASE_URL}/todos`, todoWithoutId);
    }

    getTodoById(todoId: number): Observable<Todo> {
        return this.http.get<Todo>(`${BASE_URL}/todos/${todoId}`);
    }

}
