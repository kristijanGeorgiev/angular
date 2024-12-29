import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/episode';
import { ActorService } from '../services/actor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-actor-list',
  standalone: false,
  
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css'
})
export class ActorListComponent implements OnInit{
  actors: Actor[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  namefilter: string = '';
  actorfilter: string = '';
  actorloaded: boolean = false
  constructor(private actorService: ActorService, private router: Router) { }

  ngOnInit(): void {
    this.getActors();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.actors.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByName(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';


    this.actors.sort((a, b) => {
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
  getActors(): void {
    this.actorService.getActors().subscribe((actor) => {
      this.actors = actor;
      this.actorfilter = '';
      this.actorloaded = true;
    });
  }
  viewActorsDetails(actors: Actor): void {
    this.router.navigate(['/actor-detail', actors.id]);
  }

  editActors(actors: Actor): void {
    this.router.navigate(['/actor-edit', actors.id]);
  }

  deleteActors(actors: Actor): void {
    if (confirm('Do you want to delete the actors')) {
      this.actorService.deleteActor(actors.id).subscribe(() => {
        this.getActors();
      });
    }
  }
}
