import { Component, Directive, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Directive({
  selector: '[appTodoistitem]'
  // templateUrl: './todolistitem.component.html',
  // styleUrls: ['./todolistitem.component.css']
})
export class TodolistitemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  updateTodoStatus(todo: Todo): void {
    todo.done = !todo.done;
    // Update Todo in service
    this.todoService.updateTodo(todo).subscribe();
  }

}
