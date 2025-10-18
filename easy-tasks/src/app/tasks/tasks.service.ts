import { Injectable, signal } from '@angular/core';
import { DUMMY_TASKS } from './task/mock/dummy-tasks';
import { NewTaskInput } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal(DUMMY_TASKS);

  constructor() {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      this.tasks.set(JSON.parse(savedTasks));
    }
  }

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
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
