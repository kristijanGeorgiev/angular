import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor';
import { ActorService } from '../services/actor.service';
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
  nameFilter: string = '';
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
      const nameA = a.name.toLowerCase(); // Case-insensitive comparison
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (nameA > nameB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0; // names are equal
    });
  }
  getActors(): void {
    this.actorService.getActor().subscribe((actors) => {
      this.actors = actors;
      console.log(actors);
    });
  }

  applyFilters(): void {
    this.actorService.getActor().subscribe((actors) => {
      this.actors = this.filterActors(actors);
    });
  }

  filterActors(actors: Actor[]): Actor[] {
    return actors.filter(actors =>
      this.filterByName(actors)
    );
  }

  filterByName(actor: Actor): boolean {
    return this.nameFilter === '' || actor.name.toLowerCase().includes(this.nameFilter.toLowerCase());
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
