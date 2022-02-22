import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RetirementIncomeComponent } from './retirement-income/retirement-income.component';
import { DividendCalculatorComponent } from './dividend-calculator/dividend-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RetirementIncomeComponent,
    DividendCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
