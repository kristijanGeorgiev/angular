import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/book.service';
import { Book } from '../models/book';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-detail',
  standalone: false,
  
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit{
  books: Book | undefined
  constructor(private route: ActivatedRoute, private router: Router, private booksService: BooksService) { }
  ngOnInit(): void {
    this.getBooksDetails();
  }
  getBooksDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.booksService.getBooksById(+id).subscribe((books:  Book| undefined) => {
        this.books = books;
      });
    }
  }
  goToBooksList(): void {
    this.router.navigate(['/books']);
  }
}
