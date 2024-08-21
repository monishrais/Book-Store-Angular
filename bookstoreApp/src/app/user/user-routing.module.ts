import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { DeleteBookComponent } from './Components/delete-book/delete-book.component';

const routes: Routes = [{
  path: 'user/:userId', component: UserComponent, children: [
    { path: 'add-book', component: AddBookComponent },
    { path: 'delete-book', component: DeleteBookComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
