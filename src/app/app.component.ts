import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo, TodoService } from './shared/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'teste-unitario-angular';

  constructor(private todoService: TodoService) { }

  subscriptions: Subscription[] = [];
  todos: Todo[] = []

  ngOnInit() {

    this.todoService.getTodos().subscribe({
      next: todos => this.todos = todos,
      error: err => { }
    })



  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }



}
