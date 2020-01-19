import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo App';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos.concat());
  }

  addTodo(newTodoText: string): void {
    if (!newTodoText) {
      return;
    }
    // Call service to add Todo, and push in subscribe()
    this.todoService.addTodo(this.capitalize(newTodoText)).subscribe(todo => {
      this.todos.push(todo);
    });
  }

  capitalize(str): string {
    if (typeof str !== 'string') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  updateTodoDoneStatus(todo: Todo): void {
    todo.done = !todo.done;
    this.updateTodo(todo);
  }

  updateTodo(todo: Todo): void {
    // Update Todo in service
    this.todoService.updateTodo(todo).subscribe();
  }

  deleteTodo(deletedTodo): void {
    this.todos = this.todos.filter(todo => todo.id !== deletedTodo.id);
    this.todoService.deleteTodo(deletedTodo.id).subscribe();
  }

  clearDone(): void {
    const finishedTodos = this.todos.filter(todo => todo.done);
    this.todos = this.todos.filter(todo => !todo.done);
    finishedTodos.forEach(todo => {
      this.todoService.deleteTodo(todo.id).subscribe();
    });
  }

}
