import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from 'src/app/shared/Services/counter.service';
import { Counter2Service } from 'src/app/shared/Services/counter2.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css'],
 
})
export class AllbooksComponent implements OnInit {

  private _PageTitle: string;

  public set PageTitle (value : string)
  {
    this._PageTitle= 'All Books';
  }

  public get PageTitle ()
  {
   return this._PageTitle ;
  }
  public books: BookModel[] = [];
  constructor(public bookservice: BookService,public _counter:Counter2Service) { }

  ngOnInit(): void {
    //Old Code
    //this.books = this.bookservice.getbook();
    const Allbook = this.bookservice.getbook();
    this.PageTitle="All Books";
    Allbook.forEach(b=>{
    var obj = new BookModel();
    obj.id=b.id,
    obj.price=b.price,
    obj.title=b.title,
    obj.auther=b.auther,
    obj.totalNumber=b.totalNumber
     this.books.push(obj);
    }) 
    console.log(this.books);
  }
  public increase(): void {
    this._counter.inccounter();
  }
  public decrease(): void {
    this._counter.deccounter();
  }
}
