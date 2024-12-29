import { Component, OnInit } from '@angular/core';
import { Companions } from '../models/episode';
import { CompanionService } from '../services/companion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-companion-list',
  standalone: false,
  
  templateUrl: './companion-list.component.html',
  styleUrl: './companion-list.component.css'
})
export class CompanionListComponent implements OnInit{
  companions: Companions[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  namefilter: string = '';
  companionfilter: string = '';
  companionloaded: boolean = false
  constructor(private companionService: CompanionService, private router: Router) { }

  ngOnInit(): void {
    this.getCompanions();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.companions.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByName(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.companions.sort((a, b) => {
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
  getCompanions(): void {
    this.companionService.getCompanions().subscribe((companiion) => {
      this.companions = companiion;
      this.companionfilter = '';
      this.companionloaded = true;
    });
  }
  
  viewCompanionsDetails(companions: Companions): void {
    this.router.navigate(['/companion-detail', companions.id]);
  }

  editCompanions(companions: Companions): void {
    this.router.navigate(['/companion-edit', companions.id]);
  }

  deleteCompanions(companions: Companions): void {
    if (confirm('Do you want to delete the companions')) {
      this.companionService.deleteCompanion(companions.id).subscribe(() => {
        this.getCompanions();
      });
    }
  }
}
