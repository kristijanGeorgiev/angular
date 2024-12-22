import { Component, OnInit } from '@angular/core';
import { People } from '../models/people';
import { PeopleService } from '../services/people.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-people-list',
  standalone: false,
  
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit{
  people: People[] = [];
  listhobby: string[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  namefilter: string = '';
  hobbiesfilter: string = '';
  hobbiesloaded: boolean = false
  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit(): void {
    this.getPeople();
    this.getHobbies();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.people.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByName(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';


    this.people.sort((a, b) => {
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
  getPeople(): void {
    this.peopleService.getPeople().subscribe((people) => {
      this.people = people;
      console.log(people);
    });
  }

  getHobbies(): void {
    this.peopleService.getHobbies().subscribe((hobby) => {
      this.listhobby = hobby;
      this.hobbiesfilter = '';
      this.hobbiesloaded = true;
    });
  }

  applyFilters(): void {
    this.peopleService.getPeople().subscribe((people) => {
      this.people= this.filterPeople(people);
    });
  }

  filterPeople(people: People[]): People[] {
    return people.filter(people =>
      this.filterByName(people) &&
      this.filterByHobbies(people)
    )
  }

  filterByName(people: People): boolean {
    return this.namefilter === '' || people.name.toLowerCase().includes(this.namefilter.toLowerCase());
  }
  filterByHobbies(people: People): boolean {
    return (
      this.hobbiesfilter === undefined ||
      this.hobbiesfilter === '' ||
      people.friends.some((friendshobby) =>
      friendshobby.hobbies.includes(this.hobbiesfilter)
    ));
  }

  viewPeopleDetails(people: People): void {
    this.router.navigate(['/people-detail', people.id]);
  }

  editPeople(people: People): void {
    this.router.navigate(['/people-edit', people.id]);
  }

  deletePeople(people: People): void {
    if (confirm('Do you want to delete the people')) {
      this.peopleService.deletePeople(people.id).subscribe(() => {
        this.getPeople();
      });
    }
  }
}
