import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { Author } from '../models/author';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-author-detail',
  standalone: false,
  
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent implements OnInit{
  author: Author | undefined
  constructor(private route: ActivatedRoute, private authorService: AuthorService) { }
  ngOnInit(): void {
    this.getAuthorDetails();
  }
  getAuthorDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.authorService.getAuthorById(+id).subscribe((author: Author| undefined) => {
        this.author = author;
      });
    }
  }
}
