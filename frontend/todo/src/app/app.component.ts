import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo App';
  todos = [];
  newTodoId = 1;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo(newTodoText: string): void {
    this.todos.push({
      text: newTodoText,
      done: false,
      id: this.newTodoId
    });
    this.newTodoId++;
  }

  deleteTodo(deletedTodo): void {
    this.todos = this.todos.filter(todo => todo.id !== deletedTodo.id);
  }

  clearDone(): void {
    this.todos = this.todos.filter(todo => !todo.done);
  }

}
