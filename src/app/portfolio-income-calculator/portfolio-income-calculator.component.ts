import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-income-calculator',
  templateUrl: './portfolio-income-calculator.component.html',
  styleUrls: ['./portfolio-income-calculator.component.scss']
})
export class PortfolioIncomeCalculatorComponent implements OnInit {
portfolioIncome = 0.00;
  incomeYield = 0.00;
  constructor() { }

  ngOnInit(): void {
    // this.processKeyup("500000", ".04");
  }


    processKeyup(portfolio: string = "", incomeYield: string = "",)
    {
      if (portfolio !== "" && incomeYield !== ""){
      let portfolioB = portfolio.replace("$", "").replace(",","");
      this.portfolioIncome = Number(portfolioB) * Number(incomeYield);
    }
    }
}
