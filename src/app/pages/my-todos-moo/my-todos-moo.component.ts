import { Component, OnInit } from '@angular/core';
import { MyTodosMooService } from 'src/app/services/my-todos-moo.service';

@Component({
  selector: 'app-my-todos-moo',
  templateUrl: './my-todos-moo.component.html',
  styleUrls: ['./my-todos-moo.component.css']
})
export class MyTodosMooComponent implements OnInit {

  constructor(public svc:MyTodosMooService) { }

  ngOnInit() {
  }

}
