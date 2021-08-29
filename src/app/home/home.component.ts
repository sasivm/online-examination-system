import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  app_title: string = 'Exam Daily';
  user_info: any = {
    name: 'Sasi'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
