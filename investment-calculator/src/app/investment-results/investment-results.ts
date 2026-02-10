import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  template: `
    @if (!results()?.length) {
      <p>Please enter some values and press "Calculate"</p>
    } @else {
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          @for (result of results(); track result.year) {
            <tr>
              <td>{{ result.year }}</td>
              <td>{{ result.valueEndOfYear | currency }}</td>
              <td>{{ result.interest | currency }}</td>
              <td>{{ result.totalInterest | currency }}</td>
              <td>{{ result.totalAmountInvested | currency }}</td>
            </tr>
          }
        </tbody>
      </table>
    }
  `,
  styles: `
    P {
      text-align: center;
    }

    table {
      max-width: 50rem;
      margin: 2rem auto;
      padding: 1rem;
      table-layout: fixed;
      border-spacing: 1rem;
      text-align: right;
    }

    table thead {
      font-size: 0.7rem;
      color: #83e6c0;
    }

    table tbody {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 0.85rem;
      color: #c2e9e0;
    }
  `,
})
export class InvestmentResults {
  private investmentService = inject(InvestmentService);

  results = this.investmentService.resultsData;
}
