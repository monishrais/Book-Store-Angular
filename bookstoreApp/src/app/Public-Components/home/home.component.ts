import { AfterViewInit, Component, ElementRef, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { every } from 'rxjs';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { CounterService } from 'src/app/shared/Services/counter.service';
import { TestService } from 'src/app/shared/Services/Test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ViewChild('authors') private childauthor :AuthorsComponent
  // @ViewChild('decbutton') private decbutton:MatButton;
   // @ViewChild('titles')private titles: ElementRef;

  // constructor(public _counter: CounterService, @Inject('AppTitle')
  // public title: any) { }
  constructor(public _testservice:TestService) 
  {

   }

  ngOnInit(): void {
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
