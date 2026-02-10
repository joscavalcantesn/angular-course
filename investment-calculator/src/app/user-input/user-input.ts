import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

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
  private investmentService = inject(InvestmentService);

  enteredInitialInvestment = signal<number>(0);
  enteredAnnualInvestment = signal<number>(0);
  enteredExpectedReturn = signal<number>(5);
  enteredDuration = signal<number>(10);

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.enteredInitialInvestment(),
      duration: this.enteredDuration(),
      expectedReturn: this.enteredExpectedReturn(),
      annualInvestment: this.enteredAnnualInvestment(),
    });
  }
}
