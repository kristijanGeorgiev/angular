import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeAddComponent } from './episode-add/episode-add.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodeEditComponent } from './episode-edit/episode-edit.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/episodes', pathMatch: 'full' },
  { path: 'episodes', component: EpisodeListComponent },
  { path: 'episode-add', component: EpisodeAddComponent },
  { path: 'episode-detail/:id', component: EpisodeDetailComponent},
  { path: 'episode-edit/:id', component: EpisodeEditComponent },
  { path: 'statistic', component: StatisticComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '/episodes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
