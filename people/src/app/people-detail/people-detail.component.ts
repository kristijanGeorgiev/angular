import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../services/people.service';
import { People } from '../models/people';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-people-detail',
  standalone: false,
  
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.css'
})
export class PeopleDetailComponent implements OnInit{
  people: People | undefined
  constructor(private route: ActivatedRoute, private router: Router, private peopleService: PeopleService) { }
  ngOnInit(): void {
    this.getPeopleDetails();
  }
  getPeopleDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.peopleService.getPeopleById(+id).subscribe((people: People| undefined) => {
        this.people= people;
      });
    }
  }
  goToPeopleList(): void {
    this.router.navigate(['/people']);
  }
}
