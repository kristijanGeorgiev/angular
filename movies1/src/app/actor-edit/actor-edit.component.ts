import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Actor } from '../models/movie';
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
  getActors(): void {
    this.actorService.getActors().subscribe((actors) => {
      this.actor = this.actor;
    });
  }
  saveChanges(): void {
    if (this.actor) {
      this.actorService.updateActor(this.actor).subscribe(() => {
        this.router.navigate(['/actor-detail', this.actor!.id]);
      });
    }
  }
}
