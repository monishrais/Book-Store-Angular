import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Public-Components/about-us/about-us.component';
import { HowitworksComponent } from './Public-Components/howitworks/howitworks.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './Public-Components/home/home.component';
import { booksComponent } from './books/books.component';
import { AllbooksComponent } from './books/component/allbooks/allbooks.component';


const routes: Routes = [
  { path: 'home', component:HomeComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'howitworks', component: HowitworksComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
   {path: 'books',
   loadChildren: () => import('./books/books.module').then(m => m.booksModule)
   },
 
  // { path: '**', component:NotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
