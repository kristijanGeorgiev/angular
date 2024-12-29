import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublisherService } from '../services/publisher.service';
import { Publisher} from '../models/book';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-publisher-detail',
  standalone: false,
  
  templateUrl: './publisher-detail.component.html',
  styleUrl: './publisher-detail.component.css'
})
export class PublisherDetailComponent implements OnInit{
  publishers: Publisher | undefined
  constructor(private route: ActivatedRoute, private router: Router, private publishersService: PublisherService) { }
  ngOnInit(): void {
    this.getPublishersDetails();
  }
  getPublishersDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.publishersService.getPublisherById(+id).subscribe((publishers:  Publisher| undefined) => {
        this.publishers = publishers;
      });
    }
  }
  goToPublishersList(): void {
    this.router.navigate(['/publishers']);
  }
}
