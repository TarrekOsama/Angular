import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number,discount:number, ...args: unknown[]): unknown {
    return (value -(value * (discount / 100))).toFixed(2) ;
  }

}
