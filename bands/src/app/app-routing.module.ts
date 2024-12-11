import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandListComponent } from './band-list/band-list.component';
import { BandAddComponent } from './band-add/band-add.component';
import { BandDetailComponent } from './band-detail/band-detail.component';
import { BandEditComponent } from './band-edit/band-edit.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/bands', pathMatch: 'full'},
  { path: 'bands', component: BandListComponent},
  { path: 'band-add', component: BandAddComponent},
  { path: 'band-detail/:id', component: BandDetailComponent},
  { path: 'band-edit/:id', component: BandEditComponent},
  { path: 'statistic', component: StatisticComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '/bands' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
