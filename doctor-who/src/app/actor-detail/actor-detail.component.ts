import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorService } from '../services/actor.service';
import { Actor } from '../models/episode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actor-detail',
  standalone: false,
  
  templateUrl: './actor-detail.component.html',
  styleUrl: './actor-detail.component.css'
})
export class ActorDetailComponent implements OnInit{
  actors: Actor | undefined
  constructor(private route: ActivatedRoute, private router: Router, private actorService: ActorService) { }
  ngOnInit(): void {
    this.getActorsDetails();
  }
  getActorsDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.actorService.getActorById(+id).subscribe((actors: Actor| undefined) => {
        this.actors = actors;
      });
    }
  }
  goToActorsList(): void {
    this.router.navigate(['/actors']);
  }
}
