import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author, Bibliography } from '../models/author';
import { AuthorService } from '../services/author.service';
@Component({
  selector: 'app-author-add',
  standalone: false,
  
  templateUrl: './author-add.component.html',
  styleUrl: './author-add.component.css'
})
export class AuthorAddComponent implements OnInit{
  newAuthor: Author = {
    id: 0,
    name: '',
    birth_date: '',
    death_date: '',
    alive: '',
    nationality: '',
    bibliography: [{
      name: '',
      year: 0,
      type: ''
    }]
  };
  bibliographies: Bibliography[] = []
  nationality: string[] = [];
  constructor(private authorService: AuthorService, private router: Router) {}
  ngOnInit(): void {
    this.getNationalities();
  }
  addAuthor(): void {
    this.authorService.addAuthor(this.newAuthor).subscribe(() => {
      this.router.navigate(['/authors']);
    });
  }
  goToAuthorList(): void {
    this.router.navigate(['/authors']);
  }
  getNationalities(): void {
    this.authorService.getNationalities().subscribe((nationality) => {
      this.nationality = nationality;
    });
  }
}
