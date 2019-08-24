import {TimeSelectorModel} from "../models/models";
import {YEARS_BACK} from "./consts";

export const GET_TIME_OBJ: () => {yearsList: number[] , timeSelectorModel: TimeSelectorModel} = () => {
  const timeSelectorModel: TimeSelectorModel = {
    from: { list: [], value: -1 },
    to: { list: [], value: -1 }
  };
  const yearsList: number[] = [];
  const thisYear: number = new Date().getFullYear();
  timeSelectorModel.from.value = thisYear;
  timeSelectorModel.to.value = thisYear;
  for (let i = thisYear; i >= (thisYear - YEARS_BACK); i--) {
    yearsList.push(i);
    timeSelectorModel.to.list.push(i);
    timeSelectorModel.from.list.push(i);
  }

  return {yearsList, timeSelectorModel};
}
