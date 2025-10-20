import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1 class="center">Welcome to {{ title() }}!</h1>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Investment Calculator');
}
