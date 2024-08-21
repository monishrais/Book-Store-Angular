import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';

const routes: Routes = [
  // { path: 'login', component:LoginComponent  },
  // { path: 'sign', component:SignupComponent },
  // { path: 'change-password', component:ChangePasswordComponent },
  {
  path: 'auth', component: AuthComponent, children: [
    { path: 'login', component:LoginComponent  },
    { path: 'sign', component:SignupComponent },
    { path: 'change-password', component:ChangePasswordComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
