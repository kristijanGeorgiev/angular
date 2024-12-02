import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ActorAddComponent } from './actor-add/actor-add.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorEditComponent } from './actor-edit/actor-edit.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { StatisticComponent } from './statistic/statistic.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MovieAddComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieListComponent,
    ActorAddComponent,
    ActorDetailComponent,
    ActorEditComponent,
    ActorListComponent,
    StatisticComponent
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
