import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {TimeSelectorComponent} from "../time-selector/time-selector.component";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  private gasList: CheckItem[] = [];
  private mainlandsList: Mainland[] = [];
  private selectedTime: SelectedTime;

  constructor(private dialog: MatDialog) {
    this.selectedTime = {from: new Date().getFullYear()}
  }

  ngOnInit() {
    this.setGasList(mockGas);
    this.setStates(mockList)
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

  public onSubmitclicked() {
    const submitItem = {
      gases: [],
      states: []
    }
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
    console.log("SUBMIT: ", submitItem); //this will be sent to the BE
  }

  public onEditYearsClicked() {
    const dialogConfig = new MatDialogConfig();

    //dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;

    this.dialog.open(TimeSelectorComponent, dialogConfig);
  }

}


const mockGas = [{name: 'co2'}, {name: 'c2o'}, {name: 'other'}];

const Africa = [
  {
    name: 'nigeria'
  },
  {
    name: 'chad'
  },
  {
    name: 'egypt'
  }
];

const America = [
  {
    name: 'U.S.A'
  },
  {
    name: 'canada'
  },
  {
    name: 'brazil'
  }
];

const Europe = [
  {
    name: 'france'
  },
  {
    name: 'belgium'
  },
  {
    name: 'swiss'
  }
];

const Australia = [
  {
    name: 'australia'
  }
];


const Asia = [
  {
    name: 'thailand'
  },
  {
    name: 'china'
  },
  {
    name: 'mongolia'
  }
];

const mockList: Mainland[] = [
  {
    name: 'africa',
    states: Africa
  },
  {
    name: 'america',
    states: America
  },
  {
    name: 'europe',
    states: Europe
  },
  {
    name: 'australia',
    states: Australia
  },
  {
    name: 'asia',
    states: Asia
  },
];

export type Mainland = {
  name: string,
  states: CheckItem[],
  isChecked?: boolean,
  isExpand?: boolean,
}


export type CheckItem = {
  name: string,
  parentName?: string,
  isChecked?: boolean
}

export type SelectedTime = {
  from: number,
  to?: number
}
