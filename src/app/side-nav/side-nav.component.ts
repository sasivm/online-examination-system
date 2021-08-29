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

  navListItems: any[] = [
    {scrName: 'Dashboard', link: '/dashboard', icon: 'th'},
    {scrName: 'Profile', link: '/profile', icon: 'user-circle'},
    {scrName: 'Courses', link: '/courses', icon: 'book'},
    {scrName: 'Upcoming Event', link: '/events', icon: 'calendar-alt'},
    {scrName: 'Leader Board', link: '/leaderboard', icon: 'chart-bar'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
