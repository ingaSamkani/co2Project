import {Component, OnInit} from '@angular/core';
import {CheckItem, Mainland, SubmitItem} from "../../models/models";
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
  public showSpinner: number = 0;
  public gasList: CheckItem[] = [];
  private statesList: Mainland[] = [];

  constructor(private backendGateService: BackendGateService) {
    this.loadGasList();
    this.loadStateList();
  }

  ngOnInit() {
  }

  public toggleMenu() {
    this.isFirstLoad = false;
    this.isMenuOpened = !this.isMenuOpened;
  }

  private loadGasList() {
    this.showSpinner++;
    this.backendGateService.getGasesTypes().subscribe((data) => {
      this.gasList = data as CheckItem[];
      this.showSpinner--;
    },
      err => {
        this.showSpinner--;
      });
  }

  private loadStateList() {
    this.showSpinner++;
    this.backendGateService.getStates().subscribe((data) => {
      this.statesList = data as Mainland[];
      this.showSpinner--;
    },
      err => {
        this.showSpinner--;
      });
  }

  public onSubmit(submitItem: SubmitItem) {
    this.showSpinner++;
    this.backendGateService.getGasResults(submitItem).subscribe((data) => {
        console.log("getGasResults - DATA: ", data);
        setTimeout(() => {
          this.showSpinner--;
        }, 1000);
      },
      (error) => {
        setTimeout(() => {
          this.showSpinner--;
        }, 1000);
        console.log("getGasResults - ERROR: ", error);
      })
  }
}
