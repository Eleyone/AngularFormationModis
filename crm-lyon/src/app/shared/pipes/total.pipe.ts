import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let result = null;

    if (value && args) {
      switch (args) {
        case 'TTC':
          result = value.totalTTC();
          break;
        case 'HT':
          result = value.totalHT();
          break;
        default:
          break;
      }
    }

    return result;
  }

}
