import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo-add',
  standalone: false,
  
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent implements OnInit{
  newTodo: Todo = {id: 0, title: '', completed: true, category: '', subcategory: ''}
  constructor(private todoService: TodoService, private router: Router) {}
 ngOnInit(): void {
 }
 addTodo(): void {
   this.todoService.addTodo(this.newTodo).subscribe(() => {
     this.router.navigate(['/todos']);
   });
 }
 goToTodoList(): void {
   this.router.navigate(['/todos']);
 }
}
