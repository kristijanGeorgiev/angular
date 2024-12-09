import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Author } from '../models/author';
import { AuthorService } from '../services/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-author-edit',
  standalone: false,
  
  templateUrl: './author-edit.component.html',
  styleUrl: './author-edit.component.css'
})
export class AuthorEditComponent implements OnInit{
  author: Author | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.getAuthorDetails();
    this.getAuthors();
  }
  getAuthorDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.authorService.getAuthorById(+id).subscribe((author) => {
        this.author = author;
      });
    }
  }
  getAuthors(): void {
    this.authorService.getAuthors().subscribe((authors) => {
      this.author = this.author;
    });
  }
  saveChanges(): void {
    if (this.author) {
      this.authorService.updateAuthor(this.author).subscribe(() => {
        this.router.navigate(['/author-detail', this.author!.id]);
      });
    }
  }
}
