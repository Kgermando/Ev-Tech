import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smartPipe'
})
export class SmartPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
