import { Injectable, signal } from '@angular/core';

export interface InvestmentInput {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}

export interface InvestmentYearResult {
  year: number;
  valueEndOfYear: number;
  interest: number;
  totalInterest: number;
  totalAmountInvested: number;
  annualInvestment: number;
}

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  private resultSignal = signal<InvestmentYearResult[] | undefined>(undefined);

  resultsData = this.resultSignal.asReadonly();

  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } = data;
    const annualData: InvestmentYearResult[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - (initialInvestment + annualInvestment * year);

      annualData.push({
        year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment,
        totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultSignal.set(annualData);
  }
}
