import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-temp',
  templateUrl: './left-temp.component.html',
  styleUrls: ['./left-temp.component.scss']
})
export class LeftTempComponent implements OnInit {

  isLoginRoute: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const curRoute = this.router.url;    
    this.isLoginRoute = !(curRoute === '/singup');
  }

}
