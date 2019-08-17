import { Component, OnInit } from '@angular/core';
import { SubmitItem } from "../../models/models";
import { BackendGateService } from "../../services/backend-gate.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public title: string = 'this is a title!!!';
  public isMenuOpened: boolean = false;
  public isFirstLoad: boolean = true;

  constructor(private backendGateService: BackendGateService) {}

  ngOnInit() {}

  public toggleMenu() {
    this.isFirstLoad = false;
    this.isMenuOpened = !this.isMenuOpened;
  }

  public onSubmit(submitItem: SubmitItem) {
      this.backendGateService.getGasResults(submitItem).subscribe((data) => {
        console.log("getGasResults - DATA: ", data);
      },
        (error) => {
          console.log("getGasResults - ERROR: ", error);
        })
  }
}
