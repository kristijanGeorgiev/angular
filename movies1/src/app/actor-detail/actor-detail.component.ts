import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from '../services/actor.service';
import { Actor } from '../models/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actor-detail',
  standalone: false,
  
  templateUrl: './actor-detail.component.html',
  styleUrl: './actor-detail.component.css'
})
export class ActorDetailComponent implements OnInit{
  actor: Actor | undefined
  constructor(private route: ActivatedRoute, private actorService: ActorService) { }
  ngOnInit(): void {
    this.getActorDetails();
  }
  getActorDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.actorService.getActorById(+id).subscribe((actor: Actor| undefined) => {
        this.actor= actor;
      });
    }
  }
}
