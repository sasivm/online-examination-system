import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-left-temp',
  templateUrl: './left-temp.component.html',
  styleUrls: ['./left-temp.component.scss']
})
export class LeftTempComponent implements OnInit {

  isLoginRoute: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('starts',);
        const currentURL = event.url;
        this.isLoginRoute = (currentURL !== '/singup');
      }
    });
  }

  ngOnInit(): void {
  }

}
