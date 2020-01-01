import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoMooComponent } from './comps/todo-moo/todo-moo.component';
import { MyTodosMooComponent } from './pages/my-todos-moo/my-todos-moo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoMooComponent,
    MyTodosMooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
