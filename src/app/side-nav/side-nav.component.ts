import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() navbarRef: any = null;
  
  userName: string = 'Sasi Kumar V M';
  screenList: string[] = [
    'Dashboard', 
  ];

  navListItems: any[] = [
    {scrName: 'Dashboard', link: '/dashboard', icon: 'dashboard'},
    {scrName: 'Profile', link: '/profile', icon: 'account_circle'},
    {scrName: 'Courses', link: '/courses', icon: 'assignment'},
    {scrName: 'Upcoming Event', link: '/events', icon: 'event'},
    {scrName: 'Leader Board', link: '/leaderboard', icon: 'analytics'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
