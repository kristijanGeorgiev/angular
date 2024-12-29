import { Component, OnInit } from '@angular/core';
import { Publisher } from '../models/book';
import { PublisherService } from '../services/publisher.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-publisher-list',
  standalone: false,
  
  templateUrl: './publisher-list.component.html',
  styleUrl: './publisher-list.component.css'
})
export class PublisherListComponent implements OnInit{
  publishers: Publisher[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  namefilter: string = '';
  publishersfilter: string = '';
  publishersloaded: boolean = false;
  constructor(private publisherservice: PublisherService, private router: Router) { }

  ngOnInit(): void {
    this.getPublishers();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.publishers.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByName(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';


    this.publishers.sort((a, b) => {
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
  getPublishers(): void {
    this.publisherservice.getPublishers().subscribe((publishers) => {
      this.publishers = publishers;
      console.log(publishers);
    });
  }

  viewPublishersDetails(publishers: Publisher): void {
    this.router.navigate(['/publisher-detail', publishers.id]);
  }

  editPublishers(publishers: Publisher): void {
    this.router.navigate(['/publisher-edit', publishers.id]);
  }

  deletePublishers(publishers: Publisher): void {
    if (confirm('Do you want to delete the publishers')) {
      this.publisherservice.deletePublisher(publishers.id).subscribe(() => {
        this.getPublishers();
      });
    }
  }
}
