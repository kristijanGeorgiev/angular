import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActorService } from '../services/actor.service';
import { Actor } from '../models/episode';

@Component({
  selector: 'app-actor-add',
  standalone: false,
  
  templateUrl: './actor-add.component.html',
  styleUrl: './actor-add.component.css'
})
export class ActorAddComponent implements OnInit{
  newActor: Actor = {id: 0, name: '', birthdate: '', deathdate: ''}
  actors: Actor[] = [];
   constructor(private actorservice: ActorService, private router: Router) {}
  ngOnInit(): void {
    this.getActors();
  }
  addActors(): void {
    this.actorservice.addActor(this.newActor).subscribe(() => {
      this.router.navigate(['/actors']);
    });
  }
  goToActorsList(): void {
    this.router.navigate(['/actors']);
  }
  getActors(): void {
    this.actorservice.getActors().subscribe((actors) => {
      this.actors = actors;
    });
   }
}
