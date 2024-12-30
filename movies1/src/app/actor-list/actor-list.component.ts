import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/movie';
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
  nationalityfilter: string = '';
  actorloaded: boolean = false;
  actorfilter: string = '';
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

  applyFilters(): void {
    this.actorService.getActors().subscribe((actor) => {
      this.actors= this.filterActors(actor);
    });
  }

  filterActors(actors: Actor[]): Actor[] {
    return actors.filter(actor =>
      this.filterByname(actor)
    )
  }

  filterByname(actor: Actor): boolean {
    return this.namefilter === '' || actor.name.toLowerCase().includes(this.namefilter.toLowerCase());
  }
  viewActorDetails(actor: Actor): void {
    this.router.navigate(['/actor-detail', actor.id]);
  }

  editActor(actor: Actor): void {
    this.router.navigate(['/actor-edit', actor.id]);
  }

  deleteActor(actor: Actor): void {
    if (confirm('Do you want to delete the actor')) {
      this.actorService.deleteActor(actor.id).subscribe(() => {
        this.getActors();
      });
    }
  }
}
