import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  imageURL: string = 'assets/avatar_profile.jpg';
  user_info: any = {
    name: 'Edogaru',
    email: 'edogaru@mail.com.my'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
