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

export type GridCellClickResponse = {
  col: number | string,
  row: number | string,
  data: any
}

export type QueryPopupModel = {
  state: string | number,
  year: string | number,
  gasList: {[key: string]: string | number},
}


export type TimeSelectorModel = {
  from: FromToModel
  to: FromToModel
}

type FromToModel = {
  list: number[],
  value: number
}
export type Query = {
  name: string,
  value: number | string,
  operator: Operator,
  connector?: Connector,
  isChecked: boolean,
  index: number
}

export type Operator = 'gt'| 'lt' | 'eq';
export type Connector = 'and'| 'or';

export type ComplexQuery = {
  gases: Query[],
  timeFrame: {
    from: number,
    to: number
  }
}

export type ViewOption = 'none' | 'grid' | 'lineChart';
