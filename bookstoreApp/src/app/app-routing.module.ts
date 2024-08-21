import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'howitworks', component: HowitworksComponent },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  // { path: '**', component:NotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
