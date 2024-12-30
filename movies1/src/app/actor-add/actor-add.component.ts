import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/movie';
import { ActorService } from '../services/actor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-add',
  standalone: false,
  
  templateUrl: './actor-add.component.html',
  styleUrl: './actor-add.component.css'
})
export class ActorAddComponent implements OnInit{
  newActor: Actor = {id: 0, name: '', birthdate: '', height: 0, nationality: '', notable_works: []}
  actor: Actor[] = [];
  constructor(private actorService: ActorService, private router: Router) {}
 ngOnInit(): void {
   this.getActors();
 }
 addActor(): void {
   this.actorService.addActor(this.newActor).subscribe(() => {
     this.router.navigate(['/actors']);
   });
 }
 goToActorList(): void {
   this.router.navigate(['/actors']);
 }
 getActors(): void {
  this.actorService.getActors().subscribe((actor) => {
    this.actor = actor;
  });
}
}
