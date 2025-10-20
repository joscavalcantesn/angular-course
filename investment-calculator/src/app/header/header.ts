import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header>
      <img src="investment-calculator-logo.png" alt="A money bag"/>
      <h1>Investment Calculator</h1>
    </header>
  `,
  styleUrl: './header.scss',
})
export class Header {}
