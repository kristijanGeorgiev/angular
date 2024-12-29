import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanionService } from '../services/companion.service';
import { Companions } from '../models/episode';
@Component({
  selector: 'app-companion-add',
  standalone: false,
  
  templateUrl: './companion-add.component.html',
  styleUrl: './companion-add.component.css'
})
export class CompanionAddComponent implements OnInit{
  newCompanion: Companions = {id: 0, name: ''}
  companions: Companions[] = [];
   constructor(private companionservice: CompanionService, private router: Router) {}
  ngOnInit(): void {
    this.getCompanions();
  }
  addCompanion(): void {
    this.companionservice.addCompanion(this.newCompanion).subscribe(() => {
      this.router.navigate(['/companions']);
    });
  }
  goToCompanionList(): void {
    this.router.navigate(['/companions']);
  }
 getCompanions(): void {
  this.companionservice.getCompanions().subscribe((companions) => {
    this.companions = companions;
  });
 }
}
