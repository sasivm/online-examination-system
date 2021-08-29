import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-portal',
  templateUrl: './test-portal.component.html',
  styleUrls: ['./test-portal.component.scss']
})
export class TestPortalComponent implements OnInit {

  MOBILE_MAX_WIDTH: number = 480; //in pixel
  isSmallDevice: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.isSmallDevice = (window.innerWidth < this.MOBILE_MAX_WIDTH);
    // console.log(window.innerWidth, this.isSmallDevice);
  }

}
