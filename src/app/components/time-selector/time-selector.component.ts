import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-time-selector',
  templateUrl: './time-selector.component.html',
  styleUrls: ['./time-selector.component.scss']
})
export class TimeSelectorComponent implements OnInit {
  private selectedTimeRangeType = 'single';
  constructor(private dialogRef: MatDialogRef<TimeSelectorComponent>) { }

  ngOnInit() {
  }

  public onRangeTypeChanged($event) {
    this.selectedTimeRangeType = $event.value;
  }
}
