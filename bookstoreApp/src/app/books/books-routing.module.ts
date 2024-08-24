import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbooksComponent } from './component/allbooks/allbooks.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { HomeComponent } from '../Public-Components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'allbooks', component:AllbooksComponent },   
  { path: ':id',component: BookDetailsComponent},
  // { path: 'book-details',component: BookDetailsComponent },
];

// const routes: Routes = [{
//   path: 'books', component: booksComponent, children: [
//     { path: 'allbooks', component: AllbooksComponent },
//     { path: 'book-details/:id/author/:authorId', 
//       component: BookDetailsComponent },
//     // { path: 'home', component: HomeComponent }
//   ]
// }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class booksRoutingModule { }
