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
    // console.log("hello");
    // this.processKeyup("100000", "0", "3");
  }

    processKeyup(purchasePrice ?: String, downPayment?: String, interestRate?: String) {
    if (purchasePrice != '' && downPayment != '' && interestRate != '') {
      console.log('has-value');
      var loanAmount = Number(purchasePrice?.replace(',', '')) - Number(downPayment?.replace(',', ''));
      this.mortgagePayment = (loanAmount * ((Number(interestRate?.replace(',', '')) / 100)) / 12) * (1 + ((Number(interestRate?.replace(',', '')) / 100) / 12) ^ 30) / (1 + ((Number(interestRate?.replace(',', '')) / 100)/12)^12);
      console.log(Math.round(this.mortgagePayment*100)/100);
    } else {
      console.log('missing values')
    }
    }
  
  
  calculateValues(): number {
  
    return Number();
  }

}
