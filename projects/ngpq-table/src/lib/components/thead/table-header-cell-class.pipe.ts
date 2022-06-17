import { Pipe, PipeTransform } from '@angular/core';
import { TableHeader } from './../../models/table-header.model';

@Pipe({
  name: 'headerCell',
})
export class HeaderCellClassPipe implements PipeTransform {
  transform(header: TableHeader): string {
    const classNames: string[] = [];
    if (header.className && !header.isStatic) {
      classNames.push(`${header.className}-th`);
    }

    if (header.isStatic) {
      classNames.push(`select-actions-th`);
    }

    return classNames.join(' ');
  }
}
