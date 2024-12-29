import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, Category, Publisher } from '../models/book';
import { BooksService } from '../services/book.service';
import { BehaviorSubject } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { PublisherService } from '../services/publisher.service';
@Component({
  selector: 'app-statistic',
  standalone: false,
  
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css'
})
export class StatisticComponent implements OnInit{
  books: Book[] = [];
  categories: Category[] = [];
  publishers: Publisher[] = [];
  constructor(private route: ActivatedRoute, private booksservice: BooksService, private categoryservice: CategoryService, private publisherservice: PublisherService) { }
  ngOnInit(): void {
    this.getBooks();
    this.getCategories();
    this.getPublishers();
  }
 
  getBooks(): void {
    this.booksservice.getBooks().subscribe((books) => {
      this.books = books;
      console.log(books);
    });
  }
  getCategories(): void {
    this.categoryservice.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(categories)
    });
  }

  getPublishers(): void {
    this.publisherservice.getPublishers().subscribe((publishers) => {
      this.publishers = publishers;
      console.log(publishers);
    });
  }
}
