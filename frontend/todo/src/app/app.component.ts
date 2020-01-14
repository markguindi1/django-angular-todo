import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  todos = [
    {
      text: 'Learn Angular',
      done: false,
      id: 0
    }
  ];

  newTodoId = 1;

  ngOnInit(): void {

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
