import {Component, OnInit} from '@angular/core';
import {SubmitItem} from "../../models/models";
import {BackendGateService} from "../../services/backend-gate.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: string = 'this is a title!!!';
  public isMenuOpened: boolean = false;
  public isFirstLoad: boolean = true;
  public showSpinner: boolean = false;

  constructor(private backendGateService: BackendGateService) {
  }

  ngOnInit() {
  }

  public toggleMenu() {
    this.isFirstLoad = false;
    this.isMenuOpened = !this.isMenuOpened;
  }

  public onSubmit(submitItem: SubmitItem) {
    this.showSpinner = true;
    this.backendGateService.getGasResults(submitItem).subscribe((data) => {
        console.log("getGasResults - DATA: ", data);
        setTimeout(() => {
          this.showSpinner = false;
        }, 1000);
      },
      (error) => {
        setTimeout(() => {
          this.showSpinner = false;
        }, 1000);
        console.log("getGasResults - ERROR: ", error);
      })
  }
}
