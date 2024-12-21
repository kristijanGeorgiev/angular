import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo} from '../models/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-detail',
  standalone: false,
  
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit{
  todo: Todo | undefined
  constructor(private route: ActivatedRoute, private todoService: TodoService) { }
  ngOnInit(): void {
    this.getTodoDetails();
  }
  getTodoDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.todoService.getTodoById(+id).subscribe((todo: Todo| undefined) => {
        this.todo= todo;
      });
    }
  }
}
