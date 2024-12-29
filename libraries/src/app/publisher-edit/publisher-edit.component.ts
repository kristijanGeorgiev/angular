import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publisher } from '../models/book';
import { PublisherService } from '../services/publisher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-publisher-edit',
  standalone: false,
  
  templateUrl: './publisher-edit.component.html',
  styleUrl: './publisher-edit.component.css'
})
export class PublisherEditComponent implements OnInit{
  publishers: Publisher| undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private publisherService: PublisherService
  ) {}

  ngOnInit(): void {
    this.getPublishersDetails();
    this.getPublishers();
  }
  getPublishersDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.publisherService.getPublisherById(+id).subscribe((publishers) => {
        this.publishers = publishers;
      });
    }
  }
  getPublishers(): void {
    this.publisherService.getPublishers().subscribe((publishers) => {
      this.publishers = this.publishers;
    });
  }
  saveChanges(): void {
    if (this.publishers) {
      this.publisherService.updatePublisher(this.publishers).subscribe(() => {
        this.router.navigate(['/publishers', this.publishers!.id]);
      });
    }
  }
}