import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Books } from '../models/books';
@Component({
  selector: 'app-books-add',
  standalone: false,
  
  templateUrl: './books-add.component.html',
  styleUrl: './books-add.component.css'
})
export class BooksAddComponent implements OnInit{
  newBooks: Books = {id: 0, title: '', author: '', isbn: '', publishedYear: 0, publisher: '', available: true, condition: '', language: ''}
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
