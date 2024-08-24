import { ComponentFixture, TestBed } from '@angular/core/testing';

import { booksComponent } from './books.component';

describe('PublicComponent', () => {
  let component: booksComponent;
  let fixture: ComponentFixture<booksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ booksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(booksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
