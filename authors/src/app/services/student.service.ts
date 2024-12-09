import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private student = {year: 2024, id: 5422, name: 'Kristijan Georgiev'};

  constructor() { }

  getStudent() {
    return this.student;
  }
}
