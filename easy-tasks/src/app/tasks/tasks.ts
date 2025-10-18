import { Component, computed, input, signal } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { DUMMY_TASKS } from './task/mock/dummy-tasks';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  template: `
    @if (isAddingTask()) {
    <app-new-task (cancel)="onCancelAddTask()" (add)="onAddTask($event)" />
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
          <app-task [task]="task" (complete)="onCompleteTask($event)" />
        </li>
        }
      </ul>
    </section>
  `,
  styleUrl: 'tasks.scss',
})
export class Tasks {
  id = input.required<string>();
  username = input.required<string>();
  tasks = signal(DUMMY_TASKS);
  isAddingTask = signal(false);

  selectedUserTasks = computed(() => this.tasks().filter((task) => task.userId === this.id()));

  onCompleteTask(taskId: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }

  onAddTask(taskInput: { title: string; summary: string; dueDate: string }) {
    this.tasks.update((tasks) => [
      ...tasks,
      {
        id: new Date().getTime().toString(),
        userId: this.id(),
        title: taskInput.title,
        summary: taskInput.summary,
        dueDate: taskInput.dueDate,
      },
    ]);
    this.isAddingTask.set(false);
  }
}
