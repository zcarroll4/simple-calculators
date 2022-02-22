import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covered-call-calculator',
  templateUrl: './covered-call-calculator.component.html',
  styleUrls: ['./covered-call-calculator.component.scss']
})
export class CoveredCallCalculatorComponent implements OnInit {

  constructor() { }

  investment = 100;
  selectedInvestment = 'QYLD';
  investmentYield = 0.00;
  income = 0;
  qyldYield = 11.11;
  qylgYield = 5.61;
  xyldYield = 10.98;
  xylgYield = 5.47;
  ryldYield = 10.61;

  ngOnInit(): void {
    this.investmentYield = this.qyldYield;
    this.getIncome('100', 'QYLD');
  }

  getIncome(investment: string, selectedInvestment: string) {

    switch (selectedInvestment) {
      case "QYLD": {
        this.income = Number(investment) * (this.qyldYield / 100);
        this.investmentYield = this.qyldYield;
        break;
      }
      case "QYLG": {
        this.income = Number(investment) * (this.qylgYield / 100);
        this.investmentYield = this.qylgYield;
        break;
      }
      case "XYLD": {
        this.income = Number(investment) * (this.xyldYield / 100);
        this.investmentYield = this.xyldYield;
        break;
      }
      case "XYLG": {
        this.income = Number(investment) * (this.xylgYield / 100);
        this.investmentYield = this.xylgYield;
        break;
      }
      case "RYLD": {
        this.income = Number(investment) * (this.ryldYield / 100);
        this.investmentYield = this.ryldYield;
        break;
      }
      default: {
        this.income = Number(investment) * 0;
        this.investmentYield = 0.00;
        break;
      }
    }
  }
}
