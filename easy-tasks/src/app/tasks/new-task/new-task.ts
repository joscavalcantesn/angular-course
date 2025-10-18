import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  template: `
    <div class="backdrop" (click)="onCancel()"></div>

    <dialog open>
      <form (ngSubmit)="onSubmit()">
        <h2>New Task</h2>
        <div>
          <label for="title">Title</label>
          <input type="text" id="title" name="title" [(ngModel)]="title" required />
        </div>
        <div>
          <label for="summary">Summary</label>
          <textarea id="summary" rows="5" name="summary" [(ngModel)]="summary" required></textarea>
        </div>
        <div>
          <label for="due-date">Due Date</label>
          <input type="date" id="due-date" name="due-date" [(ngModel)]="dueDate" required />
        </div>
        <div class="actions">
          <button type="button" (click)="onCancel()">Cancel</button>
          <button type="submit">Add</button>
        </div>
      </form>
    </dialog>
  `,
  styleUrl: 'new-task.scss',
})
export class NewTask {
  cancel = output<void>();
  add = output<{ title: string; summary: string; dueDate: string }>();

  title = '';
  summary = '';
  dueDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    });
  }
}
