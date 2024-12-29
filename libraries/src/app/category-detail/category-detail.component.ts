import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/book';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category-detail',
  standalone: false,
  
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.css'
})
export class CategoryDetailComponent implements OnInit{
  categories: Category | undefined
  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.getCategoriesDetails();
  }
  getCategoriesDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.categoryService.getCategoryById(+id).subscribe((categories: Category| undefined) => {
        this.categories = categories;
      });
    }
  }
  goToCategoriesList(): void {
    this.router.navigate(['/categories']);
  }
}