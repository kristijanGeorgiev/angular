import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Band } from '../models/band';
import { BandService } from '../services/band.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-band-detail',
  standalone: false,
  
  templateUrl: './band-detail.component.html',
  styleUrl: './band-detail.component.css'
})
export class BandDetailComponent implements OnInit{
  band: Band | undefined
  constructor(private route: ActivatedRoute, private bandService: BandService) { }
  ngOnInit(): void {
    this.getBandDetails();
  }
  getBandDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.bandService.getBandById(+id).subscribe((band: Band| undefined) => {
        this.band = band;
      });
    }
  }
}
