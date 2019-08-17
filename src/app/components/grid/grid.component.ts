import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() rows: any[] = [];
  @Input() cols: any[] = [];
  @Input() data: any = {};
  constructor() {}

  ngOnInit() {
    this.rows = ['ROWS: ', ...this.rows];
    this.cols = ['COLS: ', ...this.cols];
  }

}
