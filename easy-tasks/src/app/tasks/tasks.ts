import { Component, computed, input, signal } from '@angular/core';
import { DUMMY_TASKS } from './task/mock/dummy-tasks';
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
        @for (task of selectedUserTasks(); track task.id) {
        <li>
          <app-task [task]="task" />
        </li>
        }
      </ul>
    </section>
  `,
  styleUrl: 'tasks.scss',
})
export class Tasks {
  id = input.required<string | null>();
  username = input.required<string>();
  tasks = signal(DUMMY_TASKS);

  selectedUserTasks = computed(() => this.tasks().filter((task) => task.userId === this.id()));
}
