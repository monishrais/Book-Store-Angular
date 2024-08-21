import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllbooksComponent } from './component/allbooks/allbooks.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { PublicComponent } from './public.component';
import { HomeComponent } from './component/home/home.component';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [    
    AllbooksComponent,
    BookDetailsComponent,
    PublicComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
