import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-time-selector',
  templateUrl: './popup-query.component.html',
  styleUrls: ['./popup-query.component.scss']
})
export class PopupQueryComponent implements OnInit {
  private selectedTimeRangeType = 'single';
  constructor(private dialogRef: MatDialogRef<PopupQueryComponent>) { }

  ngOnInit() {
  }

}
