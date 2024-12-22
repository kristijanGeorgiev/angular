import { Component, OnInit } from '@angular/core';
import { People } from '../models/people';
import { PeopleService } from '../services/people.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-people-add',
  standalone: false,
  
  templateUrl: './people-add.component.html',
  styleUrl: './people-add.component.css'
})
export class PeopleAddComponent implements OnInit {
  newPeople: People = {id: 0, name: '', city: '', age: 0, friends: [{ name: '', hobbies: []}]}
  hobbies: string[] = [];
  constructor(private peopleService: PeopleService, private router: Router) {}
 ngOnInit(): void {
   this.getHobbies();
 }
 addPeople(): void {
   this.peopleService.addPeople(this.newPeople).subscribe(() => {
     this.router.navigate(['/people']);
   });
 }
 goToPeopleList(): void {
   this.router.navigate(['/episodes']);
 }
getHobbies(): void {
 this.peopleService.getHobbies().subscribe((hobbies) => {
   this.hobbies = hobbies;
 });
}
}
