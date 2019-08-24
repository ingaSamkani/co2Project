import { Pipe, PipeTransform } from '@angular/core';
import {Operator} from "../models/models";

@Pipe({
  name: 'operator'
})
export class OperatorPipe implements PipeTransform {
  /*'gt'| 'lt' | 'eq'*/
  private translator = {
    gt: '>',
    lt: '<',
    eq: '='
  }

  transform(value: Operator , ...args: any[]): any {
    return this.translator[value];
  }

}
