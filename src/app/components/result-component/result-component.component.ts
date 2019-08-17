import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {GridCellClickResponse} from "../../models/models";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {PopupQueryComponent} from "../query-popup-selector/popup-query.component";

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.scss']
})
export class ResultComponentComponent implements OnChanges {
  @Input() queryData: any;
  @Output() onGeneralClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onRequestForQuery: EventEmitter<any> = new EventEmitter<any>();

  public states: string[];
  public years: string[];
  constructor(private dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.parseQueryData()
    console.log('ResultComponentComponent - ngOnChanges: ', changes);
  }

  private parseQueryData() {
    if (!this.queryData) return;
    this.states = Object.keys(this.queryData);
    if (this.states && this.states.length > 0) {
      this.years = Object.keys(this.queryData[this.states[0]]);
    }
  }

  public onPageClick() {
    this.onGeneralClick.emit();
  }

  public onGridItemClicked(cell: GridCellClickResponse) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(PopupQueryComponent, dialogConfig);
    this.onRequestForQuery.emit(cell);
  }

}
