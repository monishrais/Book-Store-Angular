import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public name: string = "";
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryparam => {
      this.name = queryparam['name'];
      console.log(queryparam);
    }))
  }
  gotosignUp(): void {
    this.router.navigate(['/auth/signup']);
  }
  gotobookdetail(id: number, autherid: number): void {
    this.router.navigate(['/public/book-details', id, 'author', autherid],
      {queryParams:{name:'Monish'}});
  }

}
