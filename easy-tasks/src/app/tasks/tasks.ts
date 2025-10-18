import { Component, input } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  template: `
    <section id="tasks">
      <header>
        <h2>{{ username() }}'s Tasks</h2>
        <menu>
          <button>Add task</button>
        </menu>
      </header>

      <ul>
        <li>
          <app-task />
        </li>
      </ul>
    </section>
  `,
  styleUrl: 'tasks.scss',
})
export class Tasks {
  username = input.required<string>();
}
