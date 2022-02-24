import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implemnts OnInit{
    ngOnInit(): void {
  title = 'cashflow-dividends';
  window.scrollTo(0, 0);
}
}
