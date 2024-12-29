import { Component, OnInit } from '@angular/core';
import { Category } from '../models/book';
import { CategoryService } from '../services/category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category-list',
  standalone: false,
  
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{
  categories: Category[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  namefilter: string = '';
  categoriesfilter: string = '';
  categoriesloaded: boolean = false
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.categories.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByName(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';


    this.categories.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (nameA > nameB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  getCategories(): void {
    this.categoryService.getCategory().subscribe((category) => {
      this.categories = category;
      this.categoriesfilter = '';
      this.categoriesloaded = true;
    });
  }

  applyFilters(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories= this.filterCategories(categories);
    });
  }

  filterCategories(categories: Category[]): Category[] {
    return categories.filter(categories =>
      this.filterByName(categories)
    )
  }

  filterByName(categories: Category): boolean {
    return this.namefilter === '' || categories.name.toLowerCase().includes(this.namefilter.toLowerCase());
  }
  
  viewCategoriesDetails(categories: Category): void {
    this.router.navigate(['/category-detail', categories.id]);
  }

  editCategories(categories: Category): void {
    this.router.navigate(['/category-edit', categories.id]);
  }

  deleteCategories(categories: Category): void {
    if (confirm('Do you want to delete the categories')) {
      this.categoryService.deleteCategory(categories.id).subscribe(() => {
        this.getCategories();
      });
    }
  }
}
