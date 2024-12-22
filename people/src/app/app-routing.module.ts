import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleAddComponent } from './people-add/people-add.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'people-add', component: PeopleAddComponent },
  { path: 'people-detail/:id', component: PeopleDetailComponent },
  { path: 'people-edit/:id', component: PeopleEditComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '/people' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
