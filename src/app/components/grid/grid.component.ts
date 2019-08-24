import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {GridCellClickResponse} from "../../models/models";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnChanges {
  @Input() rows: any[] = [];
  @Input() cols: any[] = [];
  @Input() data: any = {};
  @Input() dataKeys: any[];
  @Output() cellClicked: EventEmitter<GridCellClickResponse> = new EventEmitter<GridCellClickResponse>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.rows = ['ROWS: ', ...this.rows];
    this.cols = ['COLS: ', ...this.cols];
  }

  public onCellClicked(rowIndex: number, colIndex: number) {
    if (colIndex === 0 || rowIndex === 0) { return; }
    const colVal = this.cols[colIndex];
    const rowVal = this.rows[rowIndex];
    const response: GridCellClickResponse = {
      col: rowVal,
      row: colVal,
      data: this.data[rowVal][colVal]
    };
    this.cellClicked.emit(response);
  }

}
