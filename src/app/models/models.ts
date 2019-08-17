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
/*
const mockGas = [{name: 'co2'}, {name: 'c2o'}, {name: 'other'}];

const Africa = [
  {
    name: 'nigeria'
  },
  {
    name: 'chad'
  },
  {
    name: 'egypt'
  }
];

const America = [
  {
    name: 'U.S.A'
  },
  {
    name: 'canada'
  },
  {
    name: 'brazil'
  }
];

const Europe = [
  {
    name: 'france'
  },
  {
    name: 'belgium'
  },
  {
    name: 'swiss'
  }
];

const Australia = [
  {
    name: 'australia'
  }
];


const Asia = [
  {
    name: 'thailand'
  },
  {
    name: 'china'
  },
  {
    name: 'mongolia'
  }
];

const mockList: Mainland[] = [
  {
    name: 'africa',
    states: Africa
  },
  {
    name: 'america',
    states: America
  },
  {
    name: 'europe',
    states: Europe
  },
  {
    name: 'australia',
    states: Australia
  },
  {
    name: 'asia',
    states: Asia
  },
];
*/
