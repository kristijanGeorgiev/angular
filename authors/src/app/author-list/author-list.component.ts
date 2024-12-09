import { Component, OnInit } from '@angular/core';
import { Author } from '../models/author';
import { AuthorService } from '../services/author.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-author-list',
  standalone: false,
  
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css'
})
export class AuthorListComponent implements OnInit{
  authors: Author[] = [];
  nationality: string[] = [];
  sortedColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  nameFilter: string = '';
  nationalityfilter: string = '';
  nationalityloaded: boolean = false
  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
    this.getAuthors();
    this.getNationalities();
  }
  sortByID(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    // Sort movies by ID
    this.authors.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
  
  sortByName(): void {

    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';


    this.authors.sort((a, b) => {
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
  getAuthors(): void {
    this.authorService.getAuthors().subscribe((authors) => {
      this.authors = authors;
      console.log(authors);
    });
  }

  getNationalities(): void {
    this.authorService.getNationalities().subscribe((nationality) => {
      this.nationality = nationality;
      this.nationalityfilter = '';
      this.nationalityloaded = true;
    });
  }

  applyFilters(): void {
    this.authorService.getAuthors().subscribe((authors) => {
      this.authors= this.filterAuthors(authors);
    });
  }

  filterAuthors(authors: Author[]): Author[] {
    return authors.filter(author =>
      this.filterByName(author) &&
      this.filterByNationality(author)
    )
  }

  filterByName(author: Author): boolean {
    return this.nameFilter === '' || author.name.toLowerCase().includes(this.nameFilter.toLowerCase());
  }
  filterByNationality(author: Author): boolean {
    return (
      this.nationalityfilter === '' ||
      author.nationality === this.nationalityfilter
    );
  }
  isAlive(author: Author) {
    return author.alive === undefined;
  }

  viewAuthorDetails(author: Author): void {
    this.router.navigate(['/author-detail', author.id]);
  }

  editAuthor(author: Author): void {
    this.router.navigate(['/author-edit', author.id]);
  }

  deleteAuthor(author: Author): void {
    if (confirm('Do you want to delete the author')) {
      this.authorService.deleteAuthor(author.id).subscribe(() => {
        this.getAuthors();
      });
    }
  }
}
