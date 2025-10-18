import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from './mock/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  template: `
    <div>
      <button (click)="onSelectUser()">
        <img [src]="imagePath()" [alt]="selectedUser().name" />
        <span>{{ selectedUser().name }}</span>
      </button>
    </div>
  `,
  styleUrl: 'user.scss',
})
export class User {
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(() => `users/${this.selectedUser().avatar}`);

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
