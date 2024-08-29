import { Component, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Public-Components/about-us/about-us.component';
import { HowitworksComponent } from './Public-Components/howitworks/howitworks.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { booksModule } from './books/books.module';
import { HomeComponent } from './Public-Components/home/home.component';
import { CounterService } from './shared/Services/counter.service';
import { Counter2Service } from './shared/Services/counter2.service';
import { TestService } from './shared/Services/Test.service';
import { Counterfactory } from './shared/Services/CounterFactory';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowitworksComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SharedModule,
    BrowserAnimationsModule,
  ],

  providers: [
    //{ provide: CounterService, useFactory: () => new CounterService() },  
    Counterfactory,
    TestService,
//    Counter2Service,
    { provide: 'AppTitle', useValue: { Title: 'this is title', description: "This is the use value from Title object from App Module" } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
