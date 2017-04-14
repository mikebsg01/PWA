import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: string): string {
    let l = parseInt(limit);
    
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value.length >= l ? value.substring(0, l).trim() + "..." : value;
  }
}