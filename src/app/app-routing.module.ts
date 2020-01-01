import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTodosMooComponent } from './pages/my-todos-moo/my-todos-moo.component';


const routes: Routes = [
  { path: 'my-todos-moo', component: MyTodosMooComponent },
  
  { path: '',redirectTo: '/my-todos-moo',pathMatch: 'full'},
  { path: '**', redirectTo: '/my-todos-moo', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
