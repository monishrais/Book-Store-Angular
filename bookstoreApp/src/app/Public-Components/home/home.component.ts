import { AfterViewInit, Component, ElementRef, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { every } from 'rxjs';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthModel } from 'src/app/shared/models/authors.models';
import { CounterService } from 'src/app/shared/Services/counter.service';
import { TestService } from 'src/app/shared/Services/Test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public count :number =0;
  public obj:AuthModel={id:10,name:'Monish'};
  // @ViewChild('authors') private childauthor :AuthorsComponent
  // @ViewChild('decbutton') private decbutton:MatButton;
  // @ViewChild('titles')private titles: ElementRef;

  // constructor(public _counter: CounterService, @Inject('AppTitle')
  // public title: any) { }
  //constructor(public _testservice:TestService) 
  constructor() {
    console.log('This from Parent Constructor');
  }
  public counter():void
  {
    this.count++;
    // this.obj= {id:this.count++,name:'Rais'};
    this.obj.id= this.count++;
  }

  ngOnInit(): void {
    console.log('This from Parent ngOnInit');
  }
  // public childdata($event: any): void {
  //   console.log($event);
  // }
  // ngAfterViewInit(): void {
  //  setTimeout(() => {
  //   this.childauthor.setdata(10);
  //   this.decbutton.color= 'primary';
  //   this.decbutton.disabled=true;
  //   this.titles.nativeElement.innerHTML='This updated elementn';
  //   console.log(this.titles);
  //  }, 0);
  //   // 
  // }
  // public increase(): void 
  // {
  //   this._counter.inccounter();
  //  }
  // public decrease(): void 
  // {
  //   this._counter.deccounter();
  //  }
}
