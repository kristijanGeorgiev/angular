import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  standalone: false,
  
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  todos: Todo[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  titlefilter: string = '';
  constructor(private todoService: TodoService, private router: Router) { }
  ngOnInit(): void {
    this.getTodos();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.todos.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByTitle(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';


    this.todos.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (titleA > titleB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(todos);
    });
  }

  viewTodoDetails(todo: Todo): void {
    this.router.navigate(['/todo-detail', todo.id]);
  }

  editTodo(todo: Todo): void {
    this.router.navigate(['/todo-edit', todo.id]);
  }

  deleteTodo(todo: Todo): void {
    if (confirm('Do you want to delete the todo')) {
      this.todoService.deleteTodo(todo.id).subscribe(() => {
        this.getTodos();
      });
    }
  }
}
