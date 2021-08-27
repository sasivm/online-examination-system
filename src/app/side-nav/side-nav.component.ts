import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  userName: string = 'Sasi Kumar V M';
  screenList: string[] = [
    'Dashboard', 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
