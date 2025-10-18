import { Component, computed, inject, input, signal } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  template: `
    @if (isAddingTask()) {
    <app-new-task [userId]="userId()" (close)="onCloseAddTask()" />
    }

    <section id="tasks">
      <header>
        <h2>{{ username() }}'s Tasks</h2>
        <menu>
          <button (click)="onStartAddTask()">Add task</button>
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
  private tasksService = inject(TasksService);

  userId = input.required<string>();
  username = input.required<string>();
  isAddingTask = signal(false);

  selectedUserTasks = computed(() =>
    this.tasksService.allTasks().filter((task) => task.userId === this.userId())
  );

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }
}
