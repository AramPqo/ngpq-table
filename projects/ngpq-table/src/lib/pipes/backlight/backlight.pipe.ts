import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backlight',
})
export class BacklightPipe implements PipeTransform {
  transform(cellValue: string | number, backlightValue: string): string | number {
    if (!backlightValue) {
      return cellValue;
    } else {
      cellValue = cellValue.toString();
      const char = cellValue.toLowerCase().indexOf(backlightValue);
      if (char !== -1) {
        const substitute = cellValue.slice(char, char + backlightValue.length);
        const result = cellValue.replaceAll(
          substitute,
          `<span class="backlight">${substitute}</span>`,
        );
        return result;
      } else {
        return cellValue;
      }
    }
  }
}
