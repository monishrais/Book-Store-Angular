import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AllbooksComponent } from './component/allbooks/allbooks.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [{
  path: 'public', component: PublicComponent, children: [
    { path: 'allbooks', component: AllbooksComponent },
    { path: 'book-details/:id/author/:authorId', component: BookDetailsComponent },
    { path: 'home', component: HomeComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule { }
