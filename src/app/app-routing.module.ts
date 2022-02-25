import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { RetirementIncomeComponent } from "./retirement-income/retirement-income.component";
import { CoveredCallCalculatorComponent } from './covered-call-calculator/covered-call-calculator.component';
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Calculators/RetirementIncome', component: RetirementIncomeComponent },
  { path: 'Calculators/CoveredCallETFIncome', component: CoveredCallCalculatorComponent },
  { path: 'Calculators/MonthlyDivdendIncome', component: CoveredCallCalculatorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
