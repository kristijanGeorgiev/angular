import { Component, OnInit } from '@angular/core';
import { Book, Category, Publisher } from '../models/book';
import { BooksService } from '../services/book.service';
import { PublisherService } from '../services/publisher.service';
import { CategoryService } from '../services/category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list',
  standalone: false,
  
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{
  books: Book[] = [];
  combocategories: Category[] = [];
  combopublishers: Publisher[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  titlefilter: string = '';
  authorfilter: string = '';
  categoriesfilter: string = '';
  categoriesloaded: boolean = false
  publishersfilter: string = '';
  publishersloaded: boolean = false;
  constructor(private booksService: BooksService, private publisherservice: PublisherService, private categoryservice: CategoryService, private router: Router) { }

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
    this.categoryservice.getCategories().subscribe((categories) => {
      this.combocategories = categories;
      this.categoriesfilter = '';
      this.categoriesloaded = true;
    });
  }

  getPublishers(): void {
    this.publisherservice.getPublishers().subscribe((publishers) => {
      this.combopublishers = publishers;
      this.publishersfilter = '';
      this.publishersloaded = true;
    });
  }

  applyFilters(): void {
    this.booksService.getBooks().subscribe((books) => {
      this.books= this.filterBooks(books);
    });
  }

  filterBooks(books: Book[]): Book[] {
    return books.filter(books =>
      this.filterByTitle(books) &&
      this.filterByAuthor(books) &&
      this.filterByPublishers(books) &&
      this.filterByCategories(books)
    )
  }

  filterByTitle(books: Book): boolean {
    return this.titlefilter === '' || books.title.toLowerCase().includes(this.titlefilter.toLowerCase());
  }
  filterByAuthor(books: Book): boolean {
    return this.authorfilter === '' || books.author.toLowerCase().includes(this.authorfilter.toLowerCase());
  }
 // za niza od interfajsi
  filterByPublishers(books: Book): boolean {
    return (
      this.publishersfilter === '' || books.publisher.toLowerCase().includes(this.publishersfilter.toLowerCase())
    );
  }

  filterByCategories(books: Book): boolean {
    return (
      this.categoriesfilter === undefined ||
      this.categoriesfilter === '' ||
      books.categories.includes(this.categoriesfilter)
    );
  }
  
  viewBooksDetails(books: Book): void {
    this.router.navigate(['/book-detail', books.id]);
  }

  editBooks(books: Book): void {
    this.router.navigate(['/book-edit', books.id]);
  }

  deleteBooks(Books: Book): void {
    if (confirm('Do you want to delete the books')) {
      this.booksService.deleteBooks(Books.id).subscribe(() => {
        this.getBooks();
      });
    }
  }
}
