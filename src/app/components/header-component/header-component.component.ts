import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ViewOption } from 'src/app/models/models';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  @Input() title: string;
  @Input() backEnabled: boolean;
  @Input() forwardEnabled: boolean;
  @Input() selectedView: ViewOption;
  @Output() onViewOptionChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() onMenuClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onNavClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onMenuIconClick() {
    this.onMenuClick.emit();
  }

  onNavIconClicked(isBack: boolean) {
    this.onNavClick.emit(isBack);
  }

  onViewOptionClicked(viewOption: ViewOption) {
    if (viewOption === this.selectedView) { return; }
    this.selectedView = viewOption;
    this.onViewOptionChanged && this.onViewOptionChanged.emit(this.selectedView);
  }
}
