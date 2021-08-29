import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  @Input() navbarRef: any;

  app_title: string = 'Exam Daily';
  user_info: any = {
    name: 'Sasi'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
