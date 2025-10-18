import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  template: `
    <article>
      <h3>Task Title</h3>
      <time>Due Date</time>
      <p>Summary</p>
      <div class="actions">
        <button>Complete</button>
      </div>
    </article>
  `,
  styleUrl: 'task.scss',
})
export class Task {}
