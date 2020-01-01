import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMooComponent } from './todo-moo.component';

describe('TodoMooComponent', () => {
  let component: TodoMooComponent;
  let fixture: ComponentFixture<TodoMooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
