import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-portal-toolbar',
  templateUrl: './test-portal-toolbar.component.html',
  styleUrls: ['./test-portal-toolbar.component.scss']
})
export class TestPortalToolbarComponent implements OnInit {

  test_title: string = "CTS Mock Test 1";

  test_instruct: string = "Exam Instructions";
  time_left: string = '119:27';

  constructor() { }

  ngOnInit(): void {
  }

}
