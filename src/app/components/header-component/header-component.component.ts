import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  @Input() title: string;
  @Input() backEnabled: boolean;
  @Input() forwardEnabled: boolean;
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
}
