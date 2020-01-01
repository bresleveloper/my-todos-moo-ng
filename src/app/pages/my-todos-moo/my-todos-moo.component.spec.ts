import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodosMooComponent } from './my-todos-moo.component';

describe('MyTodosMooComponent', () => {
  let component: MyTodosMooComponent;
  let fixture: ComponentFixture<MyTodosMooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTodosMooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTodosMooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
