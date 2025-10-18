import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  template: `
    <article>
      <h3>{{ task().title }}</h3>
      <time>{{ task().dueDate }}</time>
      <p>{{ task().summary }}</p>
      <div class="actions">
        <button (click)="onCompleteTask()">Complete</button>
      </div>
    </article>
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
