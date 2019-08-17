import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public title: string = 'this is a title!!!';
  public isMenuOpened: boolean = false;
  public isFirstLoad: boolean = true;
  constructor() {}

  ngOnInit() {}

  public toggleMenu() {
    this.isFirstLoad = false;
    this.isMenuOpened = !this.isMenuOpened;
  }
}
