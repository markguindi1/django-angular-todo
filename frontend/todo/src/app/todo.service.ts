import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'http://127.0.0.1:8000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     })
  };

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    const url = `${this.baseUrl}/api/todos/`;
    return this.httpClient.get<Todo[]>(url);
    // return of(this.TODOS);
  }

  addTodo(newTodoText: string): Observable<Todo> {
    const url = `${this.baseUrl}/api/todos/`;
    const newTodo = {
      text: newTodoText,
      done: false,
    };
    return this.httpClient.post<Todo>(url, newTodo, this.httpOptions);
  }

  deleteTodo(id: number): Observable<Todo> {
    const url = `${this.baseUrl}/api/todos/${id}/`;
    return this.httpClient.delete<Todo>(url, this.httpOptions);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const url = `${this.baseUrl}/api/todos/${todo.id}/`;
    return this.httpClient.put<Todo>(url, todo, this.httpOptions);
  }

}
