import {Component, OnInit} from '@angular/core';
import {CheckItem, ComplexQuery, Mainland, Query, SubmitItem} from "../../models/models";
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
  public queryResults: any[] = [];
  private currentView: number = -1;
  private statesList: Mainland[] = [];
  private queriesCounter: number = 1;
  private complexQueriesCounter: number = 1;

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
    this.isMenuOpened = false;
    this.backendGateService.getGasResults(submitItem).subscribe((data) => {
        if (this.currentView > -1) {
          this.queryResults = this.queryResults.slice(0, this.currentView + 1);
        }
        this.currentView++;
        this.queryResults.push({data, title: `query#${this.queriesCounter++}`});
        console.log("getGasResults - DATA: ", data);
        this.showSpinner--;
      },
      (error) => {
        this.showSpinner--;
        console.log("getGasResults - ERROR: ", error);
      })
  }

  public closeMenu() {
    this.isMenuOpened = false;
  }

  public onNavClicked(isBack: boolean) {
    if (isBack) {
      this.currentView--;
      return;
    }
    this.currentView++;

  }

  public onRequestForQuery($event: ComplexQuery) {
      this.backendGateService.complexQuery($event).subscribe(data => {
        if (this.currentView > -1) {
          this.queryResults = this.queryResults.slice(0, this.currentView + 1);
        }
        this.currentView++;
        this.queryResults.push({data, title: `complex query#${this.complexQueriesCounter++}`});
        console.log("getGasResults - DATA: ", data);
        this.showSpinner--;
      },
        err => {
        console.error("error", err);
          this.showSpinner--;
        });
  }
}

