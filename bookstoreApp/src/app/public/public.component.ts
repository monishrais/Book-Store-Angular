import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  bookid:number=1;
  authorid:number=123;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe((param)=>{
      console.log(param);
    })
  }
}
