import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanionService } from '../services/companion.service';
import { Companions } from '../models/episode';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-companion-detail',
  standalone: false,
  
  templateUrl: './companion-detail.component.html',
  styleUrl: './companion-detail.component.css'
})
export class CompanionDetailComponent implements OnInit{
  companions: Companions | undefined
  constructor(private route: ActivatedRoute, private router: Router, private companionService: CompanionService) { }
  ngOnInit(): void {
    this.getCompanionDetails();
  }
  getCompanionDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.companionService.getCompanionById(+id).subscribe((companions: Companions| undefined) => {
        this.companions = companions;
      });
    }
  }
  goToCompanionsList(): void {
    this.router.navigate(['/companions']);
  }
}
