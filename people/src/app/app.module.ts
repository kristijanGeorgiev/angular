import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleAddComponent } from './people-add/people-add.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    PeopleAddComponent,
    PeopleDetailComponent,
    PeopleEditComponent,
    PeopleListComponent,
    StatisticComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent
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
