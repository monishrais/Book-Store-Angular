import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class booksComponent implements OnInit {

  bookid:number=1;
  authorid:number=123;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe((param)=>{
      console.log(param);
    })
  }
}
