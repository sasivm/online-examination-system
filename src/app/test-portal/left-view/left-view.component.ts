import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-view',
  templateUrl: './left-view.component.html',
  styleUrls: ['./left-view.component.scss']
})
export class LeftViewComponent implements OnInit {

  @Input('width') public width: number = 0;
  @Input('height') public height: number  = 0;
  @Input('left') public left: number  = 0;
  @Input('top') public top: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
