import {EventEmitter, Injectable} from '@angular/core';
import {ComplexQuery, SubmitItem} from "../models/models";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const BASE_URL: string = 'http://localhost:3000/'; 
@Injectable({
  providedIn: 'root'
})
export class BackendGateService {

  constructor(private http: HttpClient) {
  }

  public loadConfiguration() {
    return this.http.get(BASE_URL + 'configuration');
  }

  public getGasResults(submitItem: SubmitItem) {
    return this.http.post(BASE_URL + 'gas_results',submitItem);
  }

  public getStates() {
    return this.http.get(BASE_URL + 'stateList');
  }

  public getGasesTypes() {
    return this.http.get(BASE_URL + 'gasList');
  }

  public complexQuery(query: ComplexQuery) {
    return this.http.post(BASE_URL + 'gas_complexResults',query);
  }
}