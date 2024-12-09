import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthorAddComponent,
    AuthorDetailComponent,
    AuthorEditComponent,
    AuthorListComponent,
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
