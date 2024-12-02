import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from '../models/actor';
import { ActorService } from '../services/actor.service';
@Component({
  selector: 'app-actor-add',
  standalone: false,
  
  templateUrl: './actor-add.component.html',
  styleUrl: './actor-add.component.css'
})
export class ActorAddComponent {
  newActor: Actor = {id: 0, name: '', birthdate: '', height: 0, nationality: '', notable_works: []}
  actor = {
    name: '',
    notableWorks: [] as string[]
  };
  constructor(private actorService: ActorService, private router: Router) {}
  addNotableWorksField(): void {
    this.actor.notableWorks.push('');
  }
  addActor(): void {
    if (!this.actor.name) {
      alert('Actor name is required!');
      return;
    }
    console.log('Adding actor:', this.actor);
    alert('Actor added successfully!');
    this.actor = { name: '', notableWorks: [] };
  }
}
