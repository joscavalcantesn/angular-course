import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';
import { TaskInput } from './task.model';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  template: `
    <app-card>
      <article>
        <h3>{{ task().title }}</h3>
        <time>{{ task().dueDate | date : 'fullDate' }}</time>
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
  private tasksService = inject(TasksService);

  task = input.required<TaskInput>();

  onCompleteTask() {
    this.tasksService.removeTask(this.task().id);
  }
}
