import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../models/book';
import { BooksService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-book-edit',
  standalone: false,
  
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent implements OnInit{
  books: Book| undefined;
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