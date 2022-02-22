import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { RetirementIncomeComponent } from "./retirement-income/retirement-income.component";
import { DividendCalculatorComponent } from './dividend-calculator/dividend-calculator.component';
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Calculators/RetirementIncome', component: RetirementIncomeComponent },
  { path: 'Calculators/CoveredCallETFIncome', component: DividendCalculatorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
