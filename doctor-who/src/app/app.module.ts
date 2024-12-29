import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodeAddComponent } from './episode-add/episode-add.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodeEditComponent } from './episode-edit/episode-edit.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { ActorAddComponent } from './actor-add/actor-add.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorEditComponent } from './actor-edit/actor-edit.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { CompanionAddComponent } from './companion-add/companion-add.component';
import { CompanionDetailComponent } from './companion-detail/companion-detail.component';
import { CompanionEditComponent } from './companion-edit/companion-edit.component';
import { CompanionListComponent } from './companion-list/companion-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EpisodeAddComponent,
    EpisodeDetailComponent,
    EpisodeEditComponent,
    EpisodeListComponent,
    ActorAddComponent,
    ActorDetailComponent,
    ActorEditComponent,
    ActorListComponent,
    CompanionAddComponent,
    CompanionDetailComponent,
    CompanionEditComponent,
    CompanionListComponent,
    FooterComponent,
    HeaderComponent,
    StatisticComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
