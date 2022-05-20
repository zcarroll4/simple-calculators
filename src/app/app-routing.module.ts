import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { RetirementIncomeComponent } from "./retirement-income/retirement-income.component";
import { CoveredCallCalculatorComponent } from './covered-call-calculator/covered-call-calculator.component';
import { MonthlyDividendCalculatorComponent } from './monthly-dividend-calculator/monthly-dividend-calculator.component';
import { DividendCalendarComponent } from './dividend-calendar/dividend-calendar.component';
import { RetirementIncomePurchaseComponent } from './retirement-income-purchase/retirement-income-purchase.component';
import { VideoIntroComponent } from './video-intro/video-intro.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Calculators/RetirementIncome', component: RetirementIncomeComponent, data: { title: 'Retirement Income' } },
  { path: 'Products/RetirementIncome', component: RetirementIncomePurchaseComponent, data: { title: 'Purchase Retirement Income Calculator' } },
  { path: 'Calculators/CoveredCallETFIncome', component: CoveredCallCalculatorComponent, data: { title: 'Covered Call ETF Income Calculator' } },
  { path: 'Calculators/MonthlyDividendIncome', component: MonthlyDividendCalculatorComponent, data: { title: 'Monthly Dividend Income Calculator' } },
  { path: 'Calculators/MortgagePayment', component: MortgageCalculatorComponent, data: { title: 'Mortgage Payment Calculator' } },
  { path: 'DividendCalendar', component: DividendCalendarComponent, data: { title: 'Dividend Calendar' } },
  { path: 'i', component: VideoIntroComponent, data: { title: 'Welcome!' } },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
