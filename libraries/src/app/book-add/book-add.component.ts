import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/book.service';
import { Book } from '../models/book';
@Component({
  selector: 'app-book-add',
  standalone: false,
  
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent implements OnInit{
  newBooks: Book = {id: 0, title: '', author: '', isbn: '', publishedYear: 0, publisher: '', categories: [], available: true, condition: '', language: ''}
  categories: string[] = [];
  publishers: string[] = [];
   constructor(private booksService: BooksService, private router: Router) {}
  ngOnInit(): void {
    this.getCategories();
    this.getPublishers();
  }
  addBooks(): void {
    this.booksService.addBooks(this.newBooks).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
  goToBooksList(): void {
    this.router.navigate(['/books']);
  }
 getCategories(): void {
  this.booksService.getCategories().subscribe((categories) => {
    this.categories = categories;
  });
 }
 getPublishers(): void {
   this.booksService.getPublishers().subscribe((publishers) => {
     this.publishers = publishers;
   });
  }
}
