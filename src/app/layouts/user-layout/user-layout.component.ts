import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor( public location: Location, private router: Router) {}

  ngOnInit() {
    console.log(this.router )
  }

  isLogin(path) {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if (path === titlee) {
        return false;
    } else {
        return true;
    }
  }

  isRestablecer(path) {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1, 12 );
    console.log(titlee);
    if (path === titlee) {
        return false;
    } else {
        return true;
    }
  }

}
