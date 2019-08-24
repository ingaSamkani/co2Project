import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Connector, Operator, Query, QueryPopupModel, TimeSelectorModel} from "../../models/models";
import {GET_TIME_OBJ} from "../../consts/const.methods";

@Component({
  selector: 'popup-query',
  templateUrl: './popup-query.component.html',
  styleUrls: ['./popup-query.component.scss']
})
export class PopupQueryComponent implements OnInit {
  public gases: Query[] = [];
  public yearsList: number[] = [];
  public timeSelectorModel: TimeSelectorModel;
  public operators: Operator[] = ['eq', 'gt', "lt"];
  public connectors: Connector[] = ['and', 'or'];
  public showConnector: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) private data: QueryPopupModel, private dialogRef: MatDialogRef<PopupQueryComponent>) {
    const timeObj = GET_TIME_OBJ();
    this.yearsList = timeObj.yearsList;
    this.timeSelectorModel = timeObj.timeSelectorModel;
  }

  ngOnInit() {
    const keys = Object.keys(this.data.gasList);
    this.showConnector = keys.length - 1;
    let i = 0;
    keys.forEach(key => {
      this.gases.push({
        name: key,
        value: this.data.gasList[key],
        operator: 'gt',
        isChecked: true,
        index: i,
        connector: 'and'
      });
      i++;
    });
  }

  public onCancelClicked() {
    this.dialogRef.close({submitted: false});
  }


  public onSubmitClicked() {
    const response = {
      submitted: true,
      query: {
        gases: this.gases.filter(g => g.isChecked),
        timeFrame: {
          from: this.timeSelectorModel.from.value,
          to: this.timeSelectorModel.to.value
        }
      }
    };
    this.dialogRef.close(response);
  }

  public onGasCheckStatusChanged(gas: Query, idx: number) {
    gas.isChecked = !gas.isChecked;
    if (gas.isChecked) {
      this.showConnector = Math.max(this.showConnector, gas.index);
    } else {
      this.showConnector--;
      const subList: Query[] = this.gases.slice(idx);
      subList.forEach(q => {
        if (q.isChecked) this.showConnector = q.index;
      })
    }
  }

  public onGasConnectorChanged($event, gas: Query) {
    console.log($event);
    gas.connector = $event.value;
  }
}
