import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortDirection, SortEvent } from '../../models/sort.model';
import { Action } from '../../models/action.model';
import { SelectAction } from '../../models/select-action.model';
import { SelectDataService } from '../../shared/services/select-data.service';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: '[ngpq-thead]',
  templateUrl: './thead.component.html',
  styleUrls: ['./thead.component.scss'],
})
export class TheadComponent {
  @Input() tableHeaders: TableHeader[];
  @Input() disableSort: boolean;
  @Input() actions: Action[];
  @Input() selectActions: SelectAction[];
  @Input() isSelectAll: boolean;

  @Output() sort = new EventEmitter<SortEvent>();
  @Output() selectedAction = new EventEmitter<SelectAction>();

  direction: SortDirection = '';
  rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };
  selectedIndex: number | null = null;
  selectedColumn: string;

  constructor(public selectDataService: SelectDataService) {}

  emitSelectedActions(event: SelectAction) {
    this.selectedAction.emit(event);
  }

  sortData(header: TableHeader, index: number) {
    if (this.disableSort || header.disableSort) {
      return;
    }

    this.selectedColumn = header.key;
    if (this.selectedIndex !== index) {
      this.direction = '';
    }

    this.selectedColumn = header.key;
    this.selectedIndex = index;
    this.direction = this.rotate[this.direction];
    const sortEvent = new SortEvent(header.key, this.direction);
    this.sort.emit(sortEvent);
  }
}
