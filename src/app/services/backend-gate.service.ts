import {Injectable} from '@angular/core';
import {SubmitItem} from "../models/models";
import {HttpClient, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendGateService {

  constructor(private http: HttpClient) {
  }

  public getGasResults(submitItem: SubmitItem) {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const req = new HttpRequest('GET', url, {
      reportProgress: true
    });
    return this.http.request(req);
  }
}
