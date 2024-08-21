import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { DeleteBookComponent } from './Components/delete-book/delete-book.component';

const routes: Routes = [
  // { path: 'add-book', component: AddBookComponent },
  // { path: 'delete-book', component: DeleteBookComponent },
 {
  path: 'user/:userId', component: UserComponent, children: [
    { path: 'add-book', component: AddBookComponent },
    { path: 'delete-book', component: DeleteBookComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
