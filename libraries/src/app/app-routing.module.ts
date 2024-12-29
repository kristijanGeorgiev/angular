import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { PublisherListComponent } from './publisher-list/publisher-list.component';
import { PublisherAddComponent } from './publisher-add/publisher-add.component';
import { PublisherDetailComponent } from './publisher-detail/publisher-detail.component';
import { PublisherEditComponent } from './publisher-edit/publisher-edit.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'book-add', component: BookAddComponent },
  { path: 'book-detail/:id', component: BookDetailComponent},
  { path: 'book-edit/:id', component: BookEditComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'category-add', component: CategoryAddComponent },
  { path: 'category-detail/:id', component: CategoryDetailComponent},
  { path: 'category-edit/:id', component: CategoryEditComponent },
  { path: 'publishers', component: PublisherListComponent },
  { path: 'publisher-add', component: PublisherAddComponent },
  { path: 'publisher-detail/:id', component: PublisherDetailComponent},
  { path: 'publisher-edit/:id', component: PublisherEditComponent },
  { path: 'statistic', component: StatisticComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '/books' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
