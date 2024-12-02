import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorService } from '../services/actor.service';
import { Actor } from '../models/actor';
@Component({
  selector: 'app-actor-edit',
  standalone: false,
  
  templateUrl: './actor-edit.component.html',
  styleUrl: './actor-edit.component.css'
})
export class ActorEditComponent implements OnInit{
  actor: Actor | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private actorService: ActorService
  ) {}
  ngOnInit(): void {
    this.getActorDetails();
    this.getActors();
  }
  getActorDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.actorService.getActorById(+id).subscribe((actor) => {
        this.actor = actor;
      });
    }
  }
  updateNotable_Works(index: number, event: Event): void {
    if (this.actor) {
      const target = event.target as HTMLInputElement;
      this.actor.notable_works[index] = target.value;
    }
  }
  getActors(): void {
    this.actorService.getActor().subscribe((actor) => {
      this.actor = this.actor;
    });
  }
  saveChanges(): void {
    if (this.actor) {
      this.actorService.updateActor(this.actor).subscribe(() => {
        this.router.navigate(['/actor-details', this.actor!.id]);
      });
    }
  }

}
