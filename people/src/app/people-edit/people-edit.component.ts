import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { People } from '../models/people';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-people-edit',
  standalone: false,
  
  templateUrl: './people-edit.component.html',
  styleUrl: './people-edit.component.css'
})
export class PeopleEditComponent implements OnInit{
  people: People | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.getPeopleDetails();
    this.getPeople();
  }
  getPeopleDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.peopleService.getPeopleById(+id).subscribe((people) => {
        this.people = people;
      });
    }
  }
  getPeople(): void {
    this.peopleService.getPeople().subscribe((people) => {
      this.people = this.people;
    });
  }
  saveChanges(): void {
    if (this.people) {
      this.peopleService.updatePeople(this.people).subscribe(() => {
        this.router.navigate(['/people', this.people!.id]);
      });
    }
  }
}
