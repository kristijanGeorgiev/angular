import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Books } from '../models/books';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-books-detail',
  standalone: false,
  
  templateUrl: './books-detail.component.html',
  styleUrl: './books-detail.component.css'
})
export class BooksDetailComponent implements OnInit{
  books: Books | undefined
  constructor(private route: ActivatedRoute, private router: Router, private booksService: BooksService) { }
  ngOnInit(): void {
    this.getBooksDetails();
  }
  getBooksDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.booksService.getBooksById(+id).subscribe((books:  Books| undefined) => {
        this.books = books;
      });
    }
  }
  goToBooksList(): void {
    this.router.navigate(['/books']);
  }
}
