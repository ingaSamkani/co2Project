import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.scss']
})
export class ResultComponentComponent implements OnChanges {
  @Input() queryData: any;
  @Output() onGeneralClick: EventEmitter<any> = new EventEmitter<any>();

  public states: string[];
  public years: string[];
  constructor() { }

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

}
