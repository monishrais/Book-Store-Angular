import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PublicRoutingModule } from './public/public-routing.module';
import { PublicModule } from './public/public.module';

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
    PublicRoutingModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
