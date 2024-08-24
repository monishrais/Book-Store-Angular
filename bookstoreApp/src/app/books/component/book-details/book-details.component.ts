import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
public id:number=0; 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.params.subscribe((param)=>
      {
        this.id=param['id'];
      }) 
  }
}
