import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  TODOS: Todo[] = [
    {
      text: 'Learn Angular',
      done: false,
      id: 0
    }
  ];

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(this.TODOS);
  }

}
