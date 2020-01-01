import { TestBed } from '@angular/core/testing';

import { MyTodosMooService } from './my-todos-moo.service';

describe('MyTodosMooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyTodosMooService = TestBed.get(MyTodosMooService);
    expect(service).toBeTruthy();
  });
});
