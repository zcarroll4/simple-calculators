import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss']
})
export class MortgageCalculatorComponent implements OnInit {

  newInterestRate = "0.00";
  closingCosts  = "0.00";
  newPurchasePrice = "0.00";
  newDownPayment = "0.00";

  duration = 0;

  loanAmount = 0.00;
  pmi = 0.00;
  propertyTaxes = 0.00;
  hoa = 0.00;
  
  mortgagePayment = 0.00
  downPaymentTotal = 0.00
  showClearResultsBtn: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // this.processKeyup("100,000", "0", "6.00");
  }

  processKeyup(purchasePrice: string = "", downPayment: string = "", interestRate: string = "")
  {
      this.newPurchasePrice = purchasePrice;
    this.newDownPayment = downPayment;
    if (Number(interestRate) > 0) {
      this.newInterestRate = (Number(interestRate)).toString();
      interestRate = (Number(interestRate)).toString();
    } else {
      this.newInterestRate = interestRate;
    }
    if (purchasePrice != '' && downPayment != '' && interestRate != '') {
      let nPurchasePrice = Number(purchasePrice?.replace("$", '').replace(",", ''));
      var loanAmount =  nPurchasePrice - (nPurchasePrice) * Number(downPayment?.replace("$", '').replace(",", ''));
      var newInterestRatePerMonth = (Number(interestRate?.replace('%', ''))) / 12;
      this.mortgagePayment = loanAmount * newInterestRatePerMonth;
      this.mortgagePayment = this.mortgagePayment * (Math.pow((1 + newInterestRatePerMonth), 360));
      this.mortgagePayment = this.mortgagePayment / (Math.pow((1 + newInterestRatePerMonth), 360) - 1);
      this.showClearResultsBtn = true;
      this.downPaymentTotal = nPurchasePrice * Number(downPayment);
    }
  }
  
  
  calculateValues(): number {
  
    return Number();
  }

}
