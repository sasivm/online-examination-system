import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-temp',
  templateUrl: './left-temp.component.html',
  styleUrls: ['./left-temp.component.scss']
})
export class LeftTempComponent implements OnInit {

  isLoginRoute: boolean = false;

  constructor(private location: Location) { }

  ngOnInit(): void {
    const curRoute = this.location.path();
        
    this.isLoginRoute = (curRoute !== '/singup');
  }

}
