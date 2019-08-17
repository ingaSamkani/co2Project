export type Mainland = {
  name: string,
  states: CheckItem[],
  isChecked?: boolean,
  isExpand?: boolean,
}

export type CheckItem = {
  name: string,
  parentName?: string,
  isChecked?: boolean
}

export type SelectedTime = {
  from: number,
  to?: number
}

export type SubmitItem = {
  gases: string[],
  states: string[],
  timeSelection: SelectedTime
}
