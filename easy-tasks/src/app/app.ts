import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './user/mock/dummy-users';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  template: `
    <app-header></app-header>

    <main>
      <ul id="users">
        @for (user of users(); track user.id) {
        <li>
          <app-user
            [user]="user"
            [selected]="user.id === selectedUserId()"
            (select)="onSelectUser($event)"
          />
        </li>
        }
      </ul>

      @if(selectedUserId()) {
      <app-tasks [id]="selectedUserId()" [username]="selectedUserName()" />
      } @else {
      <h2 id="fallback">Select a user to see their tasks!</h2>
      }
    </main>

    <router-outlet />
  `,
  styleUrl: 'app.scss',
})
export class App {
  users = signal(DUMMY_USERS);
  selectedUserId = signal<string | null>(null);

  selectedUserName = computed(
    () => this.users().find((user) => user.id === this.selectedUserId()!)?.name ?? ''
  );

  onSelectUser(userId: string) {
    this.selectedUserId.set(userId);
  }
}
