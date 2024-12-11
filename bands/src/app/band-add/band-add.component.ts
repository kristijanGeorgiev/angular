import { Component, OnInit } from '@angular/core';
import { Album, Band } from '../models/band';
import { Router } from '@angular/router';
import { BandService } from '../services/band.service';
@Component({
  selector: 'app-band-add',
  standalone: false,
  
  templateUrl: './band-add.component.html',
  styleUrl: './band-add.component.css'
})
export class BandAddComponent implements OnInit{
  newBand: Band = {
    id: 0,
    name: '',
    genre: '',
    formed: 0,
    location: '',
    members: [],
    albums: [{
      name: '',
      year: 0
    }]
  };
  albums: Album[] = []
  genre: string[] = [];
  constructor(private bandService: BandService, private router: Router) {}
  ngOnInit(): void {
    this.getGenres();
  }
  addBand(): void {
    this.bandService.addBand(this.newBand).subscribe(() => {
      this.router.navigate(['/bands']);
    });
  }
  goToBandList(): void {
    this.router.navigate(['/bands']);
  }
  getGenres(): void {
    this.bandService.getGenres().subscribe((genre) => {
      this.genre = genre;
    });
  }
}
