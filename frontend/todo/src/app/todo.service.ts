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
  private newTodoId = 1;

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(this.TODOS);
  }

  addTodo(newTodoText: string): Observable<Todo> {
    const newTodo = {
      text: newTodoText,
      done: false,
      id: this.newTodoId
    };
    this.TODOS.push(newTodo);
    this.newTodoId++;
    return of(newTodo);
  }

  deleteTodo(id: number): Observable<Todo> {
    this.TODOS = this.TODOS.filter(todo => todo.id !== id);
    return of(null);
  }
}
