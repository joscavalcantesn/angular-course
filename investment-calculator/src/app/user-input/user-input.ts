import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <div class="input-group">
        <p>
          <label for="initial-investment">Initial Investment</label>
          <input
            id="initial-investment"
            name="initialInvestment"
            type="number"
            [ngModel]="enteredInitialInvestment()"
            (ngModelChange)="enteredInitialInvestment.set($event)"
          />
        </p>
        <p>
          <label for="annual-investment">Annual Investment</label>
          <input
            id="annual-investment"
            name="annualInvestment"
            type="number"
            [ngModel]="enteredAnnualInvestment()"
            (ngModelChange)="enteredAnnualInvestment.set($event)"
          />
        </p>
      </div>
      <div class="input-group">
        <p>
          <label for="expected-return">Expected Return</label>
          <input
            id="expected-return"
            name="expectedReturn"
            type="number"
            [ngModel]="enteredExpectedReturn()"
            (ngModelChange)="enteredExpectedReturn.set($event)"
          />
        </p>
        <p>
          <label for="duration">Duration</label>
          <input
            id="duration"
            name="duration"
            type="number"
            [ngModel]="enteredDuration()"
            (ngModelChange)="enteredDuration.set($event)"
          />
        </p>
      </div>

      <p>
        <button>Calculate</button>
      </p>
    </form>
  `,
  styleUrl: './user-input.scss',
})
export class UserInput {
  enteredInitialInvestment = signal<number>(0);
  enteredAnnualInvestment = signal<number>(0);
  enteredExpectedReturn = signal<number>(5);
  enteredDuration = signal<number>(10);

  onSubmit() {
    console.log({
      initial: this.enteredInitialInvestment(),
      annual: this.enteredAnnualInvestment(),
      return: this.enteredExpectedReturn(),
      duration: this.enteredDuration(),
    });
  }
}
