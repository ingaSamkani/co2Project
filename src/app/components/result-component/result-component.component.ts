import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {GridCellClickResponse, QueryPopupModel, ViewOption} from "../../models/models";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {PopupQueryComponent} from "../query-popup-selector/popup-query.component";
import { configuration } from 'src/app/consts/consts';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.scss']
})
export class ResultComponentComponent implements OnChanges{
  @Input() queryData: any;
  @Input() dataKeys: any[];
  @Input() selectedView: ViewOption = 'grid';
  @Output() onGeneralClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onRequestForQuery: EventEmitter<any> = new EventEmitter<any>();

  public states: string[];
  public years: string[];
  public gases: string[] = [];
  constructor(private dialog: MatDialog) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.parseQueryData();
    if (this.queryData) {
      for (let state in this.queryData) {
        let stateYears = this.queryData[state];
        for (let year in stateYears) {
          let gases = stateYears[year];
          this.gases = Object.keys(gases);
        }
      }
    }
  }

  private parseQueryData() {
    if (!this.queryData) return;
    this.states = Object.keys(this.queryData);
    if (this.states) {
      const yearsObj = {};
      this.states.forEach(s => {
        const stateYears: string[] = Object.keys(this.queryData[s]);
        stateYears.forEach(sy => {
          yearsObj[sy] = true;
        });
      });
      this.years = Object.keys(yearsObj);
    }
  }

  public onPageClick() {
    this.onGeneralClick.emit();
  }

  public onGridItemClicked(cell: GridCellClickResponse) {
    if (!cell.row || !cell.col || !cell.data) { return; }
    const queryPopupModel: QueryPopupModel = {
      state: cell.row,
      year: cell.col,
      gasList: cell.data
    }
    const dialogRef = this.dialog.open(PopupQueryComponent, {data: queryPopupModel});
    dialogRef.afterClosed().subscribe(data => {
      if (data.submitted) {
        this.onRequestForQuery.emit(data.query);
      }
      console.log("DATA:", data);
    });
  }

  public getStateColor(state) {
    const color = configuration.all_states && configuration.all_states[state];
    return color || 'gray'; 
  }
}
