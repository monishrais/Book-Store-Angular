import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { booksModule } from './public/Books.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowitworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModule,
    UserModule,
    SharedModule,
    BrowserAnimationsModule,
    booksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
