import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-edit',
  standalone: false,
  
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css'
})
export class TodoEditComponent implements OnInit{
  todo: Todo | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.getTodoDetails();
    this.getTodos();
  }
  getTodoDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.todoService.getTodoById(+id).subscribe((todo) => {
        this.todo = todo;
      });
    }
  }
  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todo = this.todo;
    });
  }
  saveChanges(): void {
    if (this.todo) {
      this.todoService.updateTodo(this.todo).subscribe(() => {
        this.router.navigate(['/todo-detail', this.todo!.id]);
      });
    }
  }
}
