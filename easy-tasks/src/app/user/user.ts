import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  template: `
    <div>
      <button>
        <img [src]="'users/' + selectedUser.avatar" [alt]="selectedUser.name" />
        <span>{{ selectedUser.name}}</span>
      </button>
    </div>
  `,
  styleUrl: 'user.scss',
})
export class User {
  selectedUser = DUMMY_USERS[randomIndex];
}
