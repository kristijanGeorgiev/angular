import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Companions } from '../models/episode';
import { CompanionService } from '../services/companion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-companion-edit',
  standalone: false,
  
  templateUrl: './companion-edit.component.html',
  styleUrl: './companion-edit.component.css'
})
export class CompanionEditComponent implements OnInit{
  companions: Companions| undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companionService: CompanionService
  ) {}

  ngOnInit(): void {
    this.getCompanionDetails();
    this.getCompanions();
  }
  getCompanionDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.companionService.getCompanionById(+id).subscribe((companions) => {
        this.companions = companions;
      });
    }
  }
  getCompanions(): void {
    this.companionService.getCompanions().subscribe((companions) => {
      this.companions = this.companions;
    });
  }
  saveChanges(): void {
    if (this.companions) {
      this.companionService.updateCompanion(this.companions).subscribe(() => {
        this.router.navigate(['/companions', this.companions!.id]);
      });
    }
 }
}
