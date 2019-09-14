import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {CheckItem, Mainland, SelectedTime, SubmitItem, TimeSelectorModel} from "../../models/models";
import {GET_TIME_OBJ} from "../../consts/const.methods";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Input() gasListResponse: CheckItem[] = [];
  @Input() stateListResponse: Mainland[] = [];
  private gasList: CheckItem[] = [];
  private mainlandsList: Mainland[] = [];
  public yearsList: number[] = [];
  public timeSelectorModel: TimeSelectorModel;


  constructor() {
    this.setYearsSelection();
  }

  ngOnInit() {
    this.setGasList(this.gasListResponse);
    this.setStates(this.stateListResponse);
  }

  private setYearsSelection() {
    const timeObj = GET_TIME_OBJ();
    this.yearsList = timeObj.yearsList;
    this.timeSelectorModel = timeObj.timeSelectorModel;
  }

  private setGasList(list: CheckItem[]) {
    list.forEach(gas => {
      this.gasList.push({
        name: gas.name,
        isChecked: false,
      });
    });
  }

  private setStates(list: Mainland[]) {
    list.forEach((mainland: Mainland) => {
      this.mainlandsList.push({
        name: mainland.name,
        states: mainland.states.map(m => {
          return {
            isChecked: false,
            parentName: mainland.name,
            name: m.name
          }
        }),
        isChecked: false,
        isExpand: false,
      });
    });
  }

  public onGasCheckboxClicked(gas: CheckItem) {
    gas.isChecked = !gas.isChecked;
  }

  public onMainlandClicked(mainland: Mainland) {
    mainland.isChecked = !mainland.isChecked;
    mainland.states.forEach((state: CheckItem) => { state.isChecked = mainland.isChecked; })
  }

  public onStateClicked(state: CheckItem) {
    state.isChecked = !state.isChecked;
    const mainland: Mainland = this.mainlandsList.find((mainland => {return mainland.name === state.parentName}));
    let allSelected: boolean = true;
    mainland.states.forEach((state: CheckItem) => {
      if (!state.isChecked){
        allSelected = false;
      }
    });
    mainland.isChecked = allSelected;
  }

  public toggleExpand(mainland: Mainland) {
    mainland.isExpand = !mainland.isExpand;
  }

  public onClearAllClicked() {
    this.clearGas();
    this.clearStateSelection();
    this.setYearsSelection();
  }

  private clearGas() {
    this.gasList.forEach((g: CheckItem) => { g.isChecked = false; });
  }

  private clearStateSelection() {
    this.mainlandsList.forEach((mainland: Mainland) => {
      mainland.isChecked = false;
      mainland.states.forEach((s: CheckItem) => { s.isChecked = false; });
    });
  }

  public onSubmitClicked() {
    const submitItem: SubmitItem = {
      gases: [],
      states: [],
      timeSelection: {from: this.timeSelectorModel.from.value , to: this.timeSelectorModel.to.value}
    };

    this.gasList.forEach((g: CheckItem) => {
      if (g.isChecked) {
        submitItem.gases.push(g.name);
      }
    });

    this.mainlandsList.forEach((m: Mainland) => {
      m.states.forEach((s: CheckItem) => {
        if (s.isChecked) {
          submitItem.states.push(s.name);
        }
      });
    });
    this.onSubmit.emit(submitItem);
    console.log("SUBMIT: ", submitItem);
  }
}
