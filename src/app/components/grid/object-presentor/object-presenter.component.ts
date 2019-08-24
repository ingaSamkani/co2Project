import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'object-presenter',
  templateUrl: './object-presenter.component.html',
  styleUrls: ['./object-presenter.component.scss']
})
export class ObjectPresenterComponent implements OnInit {
  @Input() obj: {[key: string]: number | string};
  @Input() keys: any[];

  constructor() { }

  ngOnInit() {
  }
}
