import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-income-calculator',
  templateUrl: './portfolio-income-calculator.component.html',
  styleUrls: ['./portfolio-income-calculator.component.scss']
})
export class PortfolioIncomeCalculatorComponent implements OnInit {
portfolioIncome = 0.00;

  constructor() { }

  ngOnInit(): void {
    // this.processKeyup("500000", ".04");
  }


    processKeyup(portfolio: string = "", incomeYield: string = "",)
    {
      if (portfolio !== "" && incomeYield !== ""){
      let portfolioB = Number(portfolio.replace("$", '').replace(",", ''));
      let portfolioY = Number(incomeYield);
      this.portfolioIncome = portfolioB * portfolioY;
    }
    }
}
