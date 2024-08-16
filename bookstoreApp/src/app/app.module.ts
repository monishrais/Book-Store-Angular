import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'about-us', component: AboutUsComponent },
{ path: 'howitworks', component: HowitworksComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowitworksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
