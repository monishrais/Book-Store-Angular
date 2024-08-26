import { Component, Inject, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CounterService } from 'src/app/shared/Services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _counter: CounterService,@Inject('AppTitle')
     public title: any ) { }

  ngOnInit(): void {
  }
  public increase(): void 
  {
    this._counter.inccounter();
   }
  public decrease(): void 
  {
    this._counter.deccounter();
   }
}
