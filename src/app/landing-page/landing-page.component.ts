import { Component, OnInit } from '@angular/core';
import { LandingPageConstants } from './landing-page.constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  public tabs: Array<any>;
  public currentModule: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.tabs = [];
    this.activeRoute.queryParamMap.subscribe(param => {
      this.currentModule = param.get('module');
    })
  }

  ngOnInit(): void {
    this.tabs = LandingPageConstants.tabs;
  }

  public selectTab(tab) {
    this.router.navigate([], {
      relativeTo: this.activeRoute,
      queryParams: {
        'module': tab.key
      }
    })
    this.currentModule = tab.key
  }

}
