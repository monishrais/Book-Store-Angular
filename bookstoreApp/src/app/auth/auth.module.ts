import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent,
  AuthComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
