import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { StatisticComponent } from './statistic/statistic.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorAddComponent } from './actor-add/actor-add.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorEditComponent } from './actor-edit/actor-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  { path: 'movie-add', component: MovieAddComponent },
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'movie-edit/:id', component: MovieEditComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'actors', component: ActorListComponent},
  { path: 'actor-add', component: ActorAddComponent},
  { path: 'actor-detail/:id', component: ActorDetailComponent},
  { path: 'actor-edit/:id', component: ActorEditComponent},
  { path: '**', redirectTo: '/movies' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
