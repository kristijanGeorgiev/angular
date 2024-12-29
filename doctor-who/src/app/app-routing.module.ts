import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeAddComponent } from './episode-add/episode-add.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodeEditComponent } from './episode-edit/episode-edit.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorAddComponent } from './actor-add/actor-add.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorEditComponent } from './actor-edit/actor-edit.component';
import { CompanionListComponent } from './companion-list/companion-list.component';
import { CompanionAddComponent } from './companion-add/companion-add.component';
import { CompanionDetailComponent } from './companion-detail/companion-detail.component';
import { CompanionEditComponent } from './companion-edit/companion-edit.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/episodes', pathMatch: 'full' },
  { path: 'episodes', component: EpisodeListComponent },
  { path: 'episode-add', component: EpisodeAddComponent },
  { path: 'episode-detail/:id', component: EpisodeDetailComponent},
  { path: 'episode-edit/:id', component: EpisodeEditComponent },
  { path: 'actors', component: ActorListComponent },
  { path: 'actor-add', component: ActorAddComponent },
  { path: 'actor-detail/:id', component: ActorDetailComponent},
  { path: 'actor-edit/:id', component: ActorEditComponent },
  { path: 'companions', component: CompanionListComponent },
  { path: 'companion-add', component: CompanionAddComponent },
  { path: 'companion-detail/:id', component: CompanionDetailComponent},
  { path: 'companion-edit/:id', component: CompanionEditComponent },
  { path: 'statistic', component: StatisticComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '/episodes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
