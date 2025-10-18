import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  template: `
    <div class="backdrop" (click)="onClose()"></div>

    <dialog open>
      <form (ngSubmit)="onSubmit()">
        <h2>New Task</h2>
        <div>
          <label for="title">Title</label>
          <input type="text" id="title" name="title" [(ngModel)]="enteredTitle" required />
        </div>
        <div>
          <label for="summary">Summary</label>
          <textarea
            id="summary"
            rows="5"
            name="summary"
            [(ngModel)]="enteredSummary"
            required
          ></textarea>
        </div>
        <div>
          <label for="due-date">Due Date</label>
          <input type="date" id="due-date" name="due-date" [(ngModel)]="enteredDate" required />
        </div>
        <div class="actions">
          <button type="button" (click)="onClose()">Cancel</button>
          <button type="submit">Add</button>
        </div>
      </form>
    </dialog>
  `,
  styleUrl: 'new-task.scss',
})
export class NewTask {
  private tasksService = inject(TasksService);

  userId = input.required<string>();
  close = output<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId()
    );
    this.close.emit();
  }
}
