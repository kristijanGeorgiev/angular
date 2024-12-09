import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '\authors', pathMatch: 'full'},
  { path: 'authors', component: AuthorListComponent },
  { path: 'author-add', component: AuthorAddComponent },
  { path: 'author-detail/:id', component: AuthorDetailComponent },
  { path: 'author-edit/:id', component: AuthorEditComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '/movies' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
