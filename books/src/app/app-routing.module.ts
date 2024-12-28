import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksListComponent },
  { path: 'books-add', component: BooksAddComponent },
  { path: 'books-detail/:id', component: BooksDetailComponent},
  { path: 'books-edit/:id', component: BooksEditComponent },
  { path: 'statistic', component: StatisticComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '/books' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
