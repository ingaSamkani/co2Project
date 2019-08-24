import {Component, Input, OnInit} from '@angular/core';
import {TimeSelectorModel} from "../../models/models";

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss']
})
export class TimeSelectorComponent implements OnInit {
  @Input() timeSelectorModel: TimeSelectorModel;
  @Input() rangeList: number[] = [];
  @Input() isHorizontal: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }


  public onFromYearSelectionChanged() {
    this.timeSelectorModel.to.list = this.rangeList.filter(year => {if (year <= this.timeSelectorModel.from.value) return year});
    this.timeSelectorModel.to.value = (this.timeSelectorModel.to.value > this.timeSelectorModel.from.value) ?  this.timeSelectorModel.from.value : this.timeSelectorModel.to.value;
  }

  public onToYearSelectionChanged() {
    this.timeSelectorModel.from.list = this.rangeList.filter(year => {if (year >= this.timeSelectorModel.to.value) return year});
  }
}

