import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books';
import { BooksService } from '../services/books.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-books-list',
  standalone: false,
  
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit{
  books: Books[] = [];
  categories: string[] = [];
  publishers: string[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  titlefilter: string = '';
  categoriesfilter: string = '';
  categoriesloaded: boolean = false
  publishersfilter: string = '';
  publishersloaded: boolean = false;
  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
    this.getCategories();
    this.getPublishers();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.books.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByTitle(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';


    this.books.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (titleA < titleB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (titleA > titleB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  getBooks(): void {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
      console.log(books);
    });
  }

  getCategories(): void {
    this.booksService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.categoriesfilter = '';
      this.categoriesloaded = true;
    });
  }

  getPublishers(): void {
    this.booksService.getPublishers().subscribe((publishers) => {
      this.publishers = publishers;
      this.publishersfilter = '';
      this.publishersloaded = true;
    });
  }

  applyFilters(): void {
    this.booksService.getBooks().subscribe((books) => {
      this.books= this.filterBooks(books);
    });
  }

  filterBooks(books: Books[]): Books[] {
    return books.filter(books =>
      this.filterByTitle(books) &&
      this.filterByPublishers(books)
    )
  }

  filterByTitle(books: Books): boolean {
    return this.titlefilter === '' || books.title.toLowerCase().includes(this.titlefilter.toLowerCase());
  }
 // za niza od interfajsi
  filterByPublishers(books: Books): boolean {
    return (
      this.publishersfilter === '' || books.publisher.toLowerCase().includes(this.publishersfilter.toLowerCase())
    );
  }
  
  viewBooksDetails(books: Books): void {
    this.router.navigate(['/books-detail', books.id]);
  }

  editBooks(books: Books): void {
    this.router.navigate(['/books-edit', books.id]);
  }

  deleteBooks(Books: Books): void {
    if (confirm('Do you want to delete the books')) {
      this.booksService.deleteBooks(Books.id).subscribe(() => {
        this.getBooks();
      });
    }
  }
}
