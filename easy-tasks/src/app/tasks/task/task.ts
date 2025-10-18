import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Card } from '../../shared/card/card';
import { TaskInput } from './task.model';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  template: `
    <app-card>
      <article>
        <h3>{{ task().title }}</h3>
        <time>{{ task().dueDate | date }}</time>
        <p>{{ task().summary }}</p>
        <div class="actions">
          <button (click)="onCompleteTask()">Complete</button>
        </div>
      </article>
    </app-card>
  `,
  styleUrl: 'task.scss',
})
export class Task {
  task = input.required<TaskInput>();
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
