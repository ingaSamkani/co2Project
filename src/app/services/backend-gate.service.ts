import {EventEmitter, Injectable} from '@angular/core';
import {ComplexQuery, SubmitItem} from "../models/models";
import {HttpClient, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendGateService {

  constructor(private http: HttpClient) {
  }

  public getGasResults(submitItem: SubmitItem) {
    /*const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url);*/
    const result = {};
    const max = Math.max(submitItem.timeSelection.from, submitItem.timeSelection.to, 0);
    const min = Math.min(submitItem.timeSelection.from, submitItem.timeSelection.to) || 0;
    const years = [];
    for (let i = max; i >= min; i--) {
      years.push(i);
    }

    submitItem.states.forEach((state: string) => {
      const state_obj = {}
      result[state] = state_obj;
      years.forEach(year => {
        const year_obj = {};
        state_obj[year] = year_obj;
        submitItem.gases.forEach((gas) => {
          year_obj[gas] = Math.floor((Math.random()) * 100) + 30;
        });
      });
    });
    const eventEmiter: EventEmitter<any> = new EventEmitter<any>();
    setTimeout(() => {
      eventEmiter.emit(result);
    }, 1000);
    return eventEmiter
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

  public complexQuery(query: ComplexQuery) {
    const response = {}
    const states = [];
    stateList.forEach(m => {
      m.states.forEach(s => {
        if (Math.random() * 3 < 2) {
          states.push(s);
          const stateObj = {}
          response[s.name] = stateObj;
          for (let i = query.timeFrame.to; i <= query.timeFrame.from; i++) {
            const yearObj = {}
            stateObj[i.toString()] = yearObj;
            query.gases.forEach(g => {
              const gasObj = {};
              if (g.operator == "eq") {
                yearObj[g.name] = g.value;
              }
              if (g.operator == "lt") {
                yearObj[g.name] = Math.round(Math.random() * Number(g.value));
              }
              if (g.operator == "gt") {
                yearObj[g.name] = Math.round(Math.random() * Number(g.value)) + Number(g.value);
              }
            })
          }
        }
      });
    });
    const eventEmiter: EventEmitter<any> = new EventEmitter<any>();
    setTimeout(() => {
      eventEmiter.emit(response);
    }, 1000);
    return eventEmiter


  }
}

/*mock-data*/
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

