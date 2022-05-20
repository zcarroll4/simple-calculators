import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss']
})
export class MortgageCalculatorComponent implements OnInit {

  interestRate = 0.00;
  duration = 0;
  closingCosts = 0.00;
  purchasePrice = 0.00;
  downPayment = 0.00;
  loanAmount = 0.00;
  pmi = 0.00;
  propertyTaxes = 0.00;
  hoa = 0.00;
  
  mortgagePayment = 0.00

  constructor() { }

  ngOnInit(): void {
    this.processKeyup("100,000", "0", "6.00");
  }

  processKeyup(purchasePrice?: String, downPayment?: String, interestRate?: String) {
    if (purchasePrice != '' && downPayment != '' && interestRate != '') {
      var loanAmount = Number(purchasePrice?.replace(',', '')) - Number(downPayment?.replace(',', ''));
      var newInterestRatePerMonth = (Number(interestRate) / 100) / 12;
      this.mortgagePayment = loanAmount * newInterestRatePerMonth;
      this.mortgagePayment = this.mortgagePayment * (Math.pow((1 + newInterestRatePerMonth), 360));
      this.mortgagePayment = this.mortgagePayment / (Math.pow((1 + newInterestRatePerMonth), 360) - 1);
    }
  }
  
  
  calculateValues(): number {
  
    return Number();
  }

}
