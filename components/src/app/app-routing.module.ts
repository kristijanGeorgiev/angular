import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceAddComponent } from './device-add/device-add.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/devices', pathMatch: 'full' },
  { path: 'devices', component: DeviceListComponent },
  { path: 'device-add', component: DeviceAddComponent },
  { path: 'device-detail/:id', component: DeviceDetailComponent},
  { path: 'device-edit/:id', component: DeviceEditComponent },
  { path: 'statistic', component: StatisticComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '/devices' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
