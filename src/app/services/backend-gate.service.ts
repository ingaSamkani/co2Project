import {EventEmitter, Injectable} from '@angular/core';
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
    return this.http.get(url);
  }

  public getStates() {
    const eventEmiter: EventEmitter<any> = new EventEmitter<any>();
    setTimeout(() => {
      eventEmiter.emit(stateList);
    }, 1000);
    return eventEmiter
  }

  public getGasesTypes() {
    const eventEmiter: EventEmitter<any> = new EventEmitter<any>();
    setTimeout(() => {
      eventEmiter.emit(gasList);
    }, 3000);
    return eventEmiter
  }
}

const gasList = [
  {
    "name": "co2",
  },
  {
    "name": "c2o",
  },
  {
    "name": "other",
  }
];

const stateList = [
  {
    "name": "africa",
    "states": [
      {
        "name": "nigeria"
      },
      {
        "name": "chad"
      },
      {
        "name": "egypt"
      }
    ]
  },
  {
    "name": "america",
    "states": [
      {
        "name": "U.S.A"
      },
      {
        "name": "canada"
      },
      {
        "name": "brazil"
      }
    ]
  },
  {
    "name": "europe",
    "states": [
      {
        "name": "france"
      },
      {
        "name": "belgium"
      },
      {
        "name": "swiss"
      }
    ]
  },
  {
    "name": "australia",
    "states": [
      {
        "name": "australia"
      }
    ]
  },
  {
    "name": "asia",
    "states": [
      {
        "name": "thailand"
      },
      {
        "name": "china"
      },
      {
        "name": "mongolia"
      }
    ]
  }
];

