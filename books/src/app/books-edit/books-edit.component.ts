import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Books } from '../models/books';
import { BooksService } from '../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-books-edit',
  standalone: false,
  
  templateUrl: './books-edit.component.html',
  styleUrl: './books-edit.component.css'
})
export class BooksEditComponent implements OnInit{
  books: Books| undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    this.getBooksDetails();
    this.getBooks();
  }
  getBooksDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.booksService.getBooksById(+id).subscribe((books) => {
        this.books = books;
      });
    }
  }
  getBooks(): void {
    this.booksService.getBooks().subscribe((books) => {
      this.books = this.books;
    });
  }
  saveChanges(): void {
    if (this.books) {
      this.booksService.updateBooks(this.books).subscribe(() => {
        this.router.navigate(['/books', this.books!.id]);
      });
    }
 }
}
