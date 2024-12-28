import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksAddComponent } from './books-add/books-add.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
import { BooksListComponent } from './books-list/books-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BooksAddComponent,
    BooksDetailComponent,
    BooksEditComponent,
    BooksListComponent,
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
