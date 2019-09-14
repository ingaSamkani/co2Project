import {TimeSelectorModel} from "../models/models";
import {configuration} from "./consts";

export const GET_TIME_OBJ: () => {yearsList: number[] , timeSelectorModel: TimeSelectorModel} = () => {
  const timeSelectorModel: TimeSelectorModel = {
    from: { list: [], value: -1 },
    to: { list: [], value: -1 }
  };
  const yearsList: number[] = [];
  const thisYear: number = new Date().getFullYear();
  timeSelectorModel.from.value = thisYear;
  timeSelectorModel.to.value = thisYear;
  for (let i = thisYear; i > (thisYear - (configuration.years_back || this.year)); i--) {
    yearsList.push(i);
    timeSelectorModel.to.list.push(i);
    timeSelectorModel.from.list.push(i);
  }

  return {yearsList, timeSelectorModel};
}
