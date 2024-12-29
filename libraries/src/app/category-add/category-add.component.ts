import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category} from '../models/book';

@Component({
  selector: 'app-category-add',
  standalone: false,
  
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent implements OnInit{
  newCategory: Category = {id: 0, name: ''}
  categories: Category[] = [];
   constructor(private categoryservice: CategoryService, private router: Router) {}
  ngOnInit(): void {
    this.getCategories();
  }
  addCategory(): void {
    this.categoryservice.addCategory(this.newCategory).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }
  goToCategoryList(): void {
    this.router.navigate(['/categories']);
  }
 getCategories(): void {
  this.categoryservice.getCategories().subscribe((categories) => {
    this.categories = categories;
  });
 }
}
