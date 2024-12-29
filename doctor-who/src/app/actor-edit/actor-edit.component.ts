import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Actor } from '../models/episode';
import { ActorService } from '../services/actor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actor-edit',
  standalone: false,
  
  templateUrl: './actor-edit.component.html',
  styleUrl: './actor-edit.component.css'
})
export class ActorEditComponent implements OnInit{
  actors: Actor| undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actorService: ActorService
  ) {}

  ngOnInit(): void {
    this.getActorDetails();
    this.getActor();
  }
  getActorDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.actorService.getActorById(+id).subscribe((actors) => {
        this.actors = actors;
      });
    }
  }
  getActor(): void {
    this.actorService.getActors().subscribe((actors) => {
      this.actors= this.actors;
    });
  }
  saveChanges(): void {
    if (this.actors) {
      this.actorService.updateActor(this.actors).subscribe(() => {
        this.router.navigate(['/actors', this.actors!.id]);
      });
    }
 }
}
