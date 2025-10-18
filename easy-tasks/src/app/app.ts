import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User],
  template: `
    <app-header></app-header>
    <main>
      <ul id="users">
        <li>
          <app-user />
        </li>
      </ul>
    </main>
    <router-outlet />
  `,
  styleUrl: 'app.scss',
})
export class App {}
