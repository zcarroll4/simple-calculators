import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cashflow-dividends';
  constructor(private readonly titleService: Title, private readonly router: Router, private readonly activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd), map(() => {
      const pageTitle = this.titleService.getTitle();
      const child = this.activatedRoute.firstChild;
      if (child?.snapshot?.data['title']) {
        return child?.snapshot?.data['title'];
      }
      return pageTitle;
    })).subscribe({
      next: tt => {
        this.titleService.setTitle(tt),
          window.scrollTo(0, 0);
      }
    });
  }
}
}
