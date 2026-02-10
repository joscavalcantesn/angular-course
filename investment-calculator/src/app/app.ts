import { Component } from '@angular/core';
import { Header } from './header/header';
import { InvestmentResults } from './investment-results/investment-results';
import { UserInput } from './user-input/user-input';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResults],
  template: `
    <app-header />
    <app-user-input />
    <app-investment-results />
  `,
  styles: [],
})
export class App {}
