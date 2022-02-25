import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { RetirementIncomeComponent } from "./retirement-income/retirement-income.component";
import { CoveredCallCalculatorComponent } from './covered-call-calculator/covered-call-calculator.component';
import { MonthlyDividendCalculatorComponent } from './monthly-dividend-calculator/monthly-dividend-calculator.component';
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Calculators/RetirementIncome', component: RetirementIncomeComponent, data: { title: 'Retirement Income' } },
  { path: 'Calculators/CoveredCallETFIncome', component: CoveredCallCalculatorComponent, data: { title: 'Covered Call ETF Income Calculator' } },
  { path: 'Calculators/MonthlyDivdendIncome', component: MonthlyDividendCalculatorComponent, data: { title: 'Monthly Dividend Income Calculator' } }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
