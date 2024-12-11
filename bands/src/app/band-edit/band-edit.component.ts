import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Band } from '../models/band';
import { BandService } from '../services/band.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-band-edit',
  standalone: false,
  
  templateUrl: './band-edit.component.html',
  styleUrl: './band-edit.component.css'
})
export class BandEditComponent implements OnInit{
  band: Band | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bandService: BandService
  ) {}

  ngOnInit(): void {
    this.getBandDetails();
    this.getBands();
  }
  getBandDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.bandService.getBandById(+id).subscribe((band) => {
        this.band = band;
      });
    }
  }
  getBands(): void {
    this.bandService.getBands().subscribe((bands) => {
      this.band = this.band;
    });
  }
  saveChanges(): void {
    if (this.band) {
      this.bandService.updateBand(this.band).subscribe(() => {
        this.router.navigate(['/band-detail', this.band!.id]);
      });
    }
  }
}
