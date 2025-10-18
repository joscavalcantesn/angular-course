import { Injectable, signal } from '@angular/core';
import { DUMMY_TASKS } from './task/mock/dummy-tasks';
import { NewTaskInput } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal(DUMMY_TASKS);

  allTasks = this.tasks.asReadonly();

  addTask(taskInput: NewTaskInput, userId: string) {
    this.tasks.update((tasks) => [
      ...tasks,
      {
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskInput.title,
        summary: taskInput.summary,
        dueDate: taskInput.dueDate,
      },
    ]);
  }

  removeTask(id: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }
}
