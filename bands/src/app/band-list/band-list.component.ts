import { Component, OnInit } from '@angular/core';
import { Band, Places } from '../models/band';
import { BandService } from '../services/band.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-band-list',
  standalone: false,
  
  templateUrl: './band-list.component.html',
  styleUrl: './band-list.component.css'
})
export class BandListComponent implements OnInit{
  bands: Band[] = [];
  genre: string[] = [];
  places: Places[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  nameFilter: string = '';
  genrefilter: string = '';
  genreloaded: boolean = false
  countryfilter: string = '';
  countryloaded: boolean = false;
  constructor(private bandService: BandService, private router: Router) { }

  ngOnInit(): void {
    this.getBands();
    this.getGenres();
    this.getPlaces();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.bands.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByName(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';


    this.bands.sort((a, b) => {
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
  getBands(): void {
    this.bandService.getBands().subscribe((bands) => {
      this.bands = bands;
      console.log(bands);
    });
  }

  getGenres(): void {
    this.bandService.getGenres().subscribe((genre) => {
      this.genre = genre;
      this.genrefilter = '';
      this.genreloaded = true;
    });
  }

  getPlaces(): void {
    this.bandService.getPlaces().subscribe((place) => {
      this.places = place;
      this.countryfilter = '';
      this.countryloaded = true;
    });
  }

  applyFilters(): void {
    this.bandService.getBands().subscribe((bands) => {
      this.bands= this.filterBands(bands);
    });
  }

  filterBands(bands: Band[]): Band[] {
    return bands.filter(band =>
      this.filterByName(band) &&
      this.filterByGenre(band) &&
      this.filterByLocation(band)
    )
  }

  filterByName(band: Band): boolean {
    return this.nameFilter === '' || band.name.toLowerCase().includes(this.nameFilter.toLowerCase());
  }
  filterByGenre(band: Band): boolean {
    return (
      this.genrefilter === undefined ||
      this.genrefilter === '' ||
      band.genre === this.genrefilter
    );
  }

  filterByLocation(band: Band): boolean {
    return (
      this.countryfilter === undefined ||
      this.countryfilter === '' ||
      band.location.toLowerCase().includes(this.countryfilter.toLowerCase())
    );
  }

  viewBandDetails(band: Band): void {
    this.router.navigate(['/band-detail', band.id]);
  }

  editBand(band: Band): void {
    this.router.navigate(['/band-edit', band.id]);
  }

  deleteBand(band: Band): void {
    if (confirm('Do you want to delete the band')) {
      this.bandService.deleteBand(band.id).subscribe(() => {
        this.getBands();
      });
    }
  }
}
