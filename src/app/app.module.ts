import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RetirementIncomeComponent } from './retirement-income/retirement-income.component';
import { CoveredCallCalculatorComponent } from './covered-call-calculator/covered-call-calculator.component';
import { MonthlyDividendCalculatorComponent } from './monthly-dividend-calculator/monthly-dividend-calculator.component';
import { DividendCalendarComponent } from './dividend-calendar/dividend-calendar.component';
import { RetirementIncomePurchaseComponent } from './retirement-income-purchase/retirement-income-purchase.component';
import { VideoIntroComponent } from './video-intro/video-intro.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';
import { PortfolioIncomeCalculatorComponent } from './portfolio-income-calculator/portfolio-income-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RetirementIncomeComponent,
    CoveredCallCalculatorComponent,
    MonthlyDividendCalculatorComponent,
    DividendCalendarComponent,
    RetirementIncomePurchaseComponent,
    VideoIntroComponent,
    MortgageCalculatorComponent,
    PortfolioIncomeCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
