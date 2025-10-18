import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  template: `
    <article>
      <h3>{{ task().title }}</h3>
      <time>{{ task().dueDate }}</time>
      <p>{{ task().summary }}</p>
      <div class="actions">
        <button>Complete</button>
      </div>
    </article>
  `,
  styleUrl: 'task.scss',
})
export class Task {
  task = input.required<TaskInput>();
}
