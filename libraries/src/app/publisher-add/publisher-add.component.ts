import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublisherService } from '../services/publisher.service';
import { Publisher} from '../models/book';
@Component({
  selector: 'app-publisher-add',
  standalone: false,
  
  templateUrl: './publisher-add.component.html',
  styleUrl: './publisher-add.component.css'
})
export class PublisherAddComponent implements OnInit{
  newPublishers: Publisher = {id: 0, name: '', country: '', foundedYear: 0, active: true}
  publishers: Publisher[] = [];
   constructor(private publisherService: PublisherService, private router: Router) {}
  ngOnInit(): void {
    this.getPublishers();
  }
  addPublishers(): void {
    this.publisherService.addPublisher(this.newPublishers).subscribe(() => {
      this.router.navigate(['/publishers']);
    });
  }
  goToPublishersList(): void {
    this.router.navigate(['/publishers']);
  }
 getPublishers(): void {
   this.publisherService.getPublishers().subscribe((publishers) => {
     this.publishers = publishers;
   });
  }
}
