import { Component, computed, input, output } from '@angular/core';
import { UserInput } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
    <div>
      <button (click)="onSelectUser()">
        <img [src]="imagePath()" [alt]="user().name" />
        <span>{{ user().name }}</span>
      </button>
    </div>
  `,
  styleUrl: 'user.scss',
})
export class User {
  user = input.required<UserInput>();
  select = output<string>();

  imagePath = computed(() => `users/${this.user().avatar}`);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
