import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit,AfterViewChecked {
@ViewChild('myForm') myForm:ElementRef;
  constructor() { }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
