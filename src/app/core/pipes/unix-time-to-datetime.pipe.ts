import { DatePipe, formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixTimeToDatetime',
})
export class UnixTimeToDatetimePipe implements PipeTransform {
  transform(unixTime: number, format: string): string {
    if (typeof Number(unixTime) !== 'number' || isNaN(Number(unixTime))) {
      return '';
    }
    return formatDate(new Date(unixTime * 1000), format, 'de-DE');
  }
}
