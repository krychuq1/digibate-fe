import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NavigationEnd, Router, Event as RouterEvent, ActivatedRoute} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  isChildRoute = false;
  currentRoute: string;
  loading = false;
  constructor(public userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.isChildRoute = this.router.url.split('/').length > 2;
    this.currentRoute = this.router.url;
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Check if the route has more than one segment suggesting it's a child route
      this.isChildRoute = event.urlAfterRedirects.split('/').length > 2;
      this.currentRoute = event.urlAfterRedirects;

    });
  }
}
