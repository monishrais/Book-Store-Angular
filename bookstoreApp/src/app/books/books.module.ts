import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllbooksComponent } from './component/allbooks/allbooks.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { booksComponent} from './books.component';
import { booksRoutingModule } from './books-routing.module';
import { AddBookComponent } from '../user/Components/add-book/add-book.component';
import { SharedModule } from '../shared/shared.module';
import { RecentBooksComponent } from './component/recent-books/recent-books.component';
import { BookcardComponent } from './component/bookcard/bookcard.component';


@NgModule({
  declarations: [    
    AllbooksComponent,
    BookDetailsComponent,
    booksComponent,
    AddBookComponent,
    RecentBooksComponent,
    BookcardComponent,
  ],
  imports: [
    CommonModule,
    booksRoutingModule,
    SharedModule,
  ],
// providers:[BookService]
})
export class booksModule { }

