import { Component } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput],
  template: `
    <app-header />
    <app-user-input />
  `,
  styles: [],
})
export class App {}
