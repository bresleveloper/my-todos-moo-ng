import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { TodoMoo } from '../model/todo-moo';

@Injectable({
  providedIn: 'root'
})
export class MyTodosMooService {

  private baseapi = 'http://localhost:3000/todos-moo/api/my-todos-moo'

  private _todos:ReplaySubject<TodoMoo[]> = new ReplaySubject<TodoMoo[]>(1)
  public todos:Observable<TodoMoo[]> = this._todos.asObservable()

  constructor(private http:HttpClient) { 
    this.http.get(this.baseapi)
      .subscribe(data => this._todos.next(data as TodoMoo[]))
  }

}
