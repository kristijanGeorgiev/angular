import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../models/book';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-category-edit',
  standalone: false,
  
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent implements OnInit{
  categories: Category| undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategoryDetails();
    this.getCategory();
  }
  getCategoryDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.categoryService.getCategoryById(+id).subscribe((categories) => {
        this.categories = categories;
      });
    }
  }
  getCategory(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = this.categories;
    });
  }
  saveChanges(): void {
    if (this.categories) {
      this.categoryService.updateCategory(this.categories).subscribe(() => {
        this.router.navigate(['/categories', this.categories!.id]);
      });
    }
 }
}
