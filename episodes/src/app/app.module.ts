import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodeAddComponent } from './episode-add/episode-add.component';
import { EpisodeEditComponent } from './episode-edit/episode-edit.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
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
    EpisodeEditComponent,
    EpisodeDetailComponent,
    EpisodeListComponent,
    FooterComponent,
    HeaderComponent,
    StatisticComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
