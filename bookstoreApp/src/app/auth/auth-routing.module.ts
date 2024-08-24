import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';

// const routes: Routes = [
//   { path: 'allbooks', component: AllbooksComponent },   
//   { path: 'book-details',component: BookDetailsComponent },
// ];

const routes: Routes = [
  { path: 'login', component:LoginComponent  },
  { path: 'signup', component:SignupComponent },
  { path: 'change-password', component:ChangePasswordComponent },
  //{
  // path: 'auth', component: AuthComponent, children: [
  //   { path: 'login', component:LoginComponent  },
  //   { path: 'sign', component:SignupComponent },
  //   { path: 'change-password', component:ChangePasswordComponent }
  // ]
//}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
