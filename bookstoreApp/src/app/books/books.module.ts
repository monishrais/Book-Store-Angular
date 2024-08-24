import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllbooksComponent } from './component/allbooks/allbooks.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { booksComponent} from './books.component';
import { booksRoutingModule } from './books-routing.module';
import { AddBookComponent } from '../user/Components/add-book/add-book.component';

@NgModule({
  declarations: [    
    AllbooksComponent,
    BookDetailsComponent,
    booksComponent,
    AddBookComponent,
  ],
  imports: [
    CommonModule,
    booksRoutingModule,
  ]
})
export class booksModule { }

