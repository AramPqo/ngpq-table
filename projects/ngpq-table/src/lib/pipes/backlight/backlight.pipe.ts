import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backlight',
})
export class BacklightPipe implements PipeTransform {
  transform(cellValue: string | number, backlightValue: string): boolean {
    cellValue = cellValue.toString();
    const char = cellValue.toLowerCase().indexOf(backlightValue);
    return char !== -1;
  }
}
