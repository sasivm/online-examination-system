import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-view',
  templateUrl: './right-view.component.html',
  styleUrls: ['./right-view.component.scss']
})
export class RightViewComponent implements OnInit {

  optionsList: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  constructor() { }

  ngOnInit(): void {
  }

}
