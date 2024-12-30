import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActorAddComponent } from './actor-add/actor-add.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorEditComponent } from './actor-edit/actor-edit.component';
import { ActorListComponent } from './actor-list/actor-list.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieAddComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieListComponent,
    ActorAddComponent,
    ActorDetailComponent,
    ActorEditComponent,
    ActorListComponent,
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
