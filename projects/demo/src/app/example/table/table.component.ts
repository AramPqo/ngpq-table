import { Component, Input, OnInit } from '@angular/core';
import {
  ActionEvent,
  CellData,
  FilterOption,
  RowData,
  SelectActionEvent,
  Settings,
} from 'projects/ngpq-table/src/public-api';
import { Comments } from '../../models/comments.model';
import { TableInputs } from '../../models/table-inputs.modes';
import { ActionsService } from '../services/actions.service';
import { Action } from '../../../../../ngpq-table/src/lib/models/action.model';
import { SelectAction } from '../../../../../ngpq-table/src/lib/models/select-action.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @Input() data: Comments[];
  @Input() settings: { [key: string]: Settings };
  @Input() filterOptions: FilterOption;
  @Input() tableInputs: TableInputs;
  @Input() showDetails: boolean;
  @Input() pageSizeOptions: number[];

  actions: Action[];
  selectActions: SelectAction[];

  constructor(private actionsService: ActionsService) {}

  ngOnInit() {
    this.actions = this.actionsService.actions;
    this.selectActions = this.actionsService.selectActions;
  }

  // Outputs

  getSelectedActions({ method, rows }: SelectActionEvent) {
    alert(`${method.title} \n ${JSON.stringify(rows, null, 7)}`);
    console.group(`Selected Acrions`);
    console.log(method, rows);
  }

  getActionEvent(event: ActionEvent) {
    alert(`${event.action} \n ${JSON.stringify(event, null, 7)}`);
    console.group(`Action Event`);
    console.log(event);
  }

  getRowClickEvent(rowData: RowData) {
    alert(`Row Click Event \n ${JSON.stringify(rowData, null, 7)}`);
    console.group('Clicked on Cell');
    console.log(rowData);
  }

  getcellData(cellData: CellData) {
    if (!this.tableInputs.detailsTemplate) {
      alert(`Cell Click Event \n ${JSON.stringify(cellData, null, 7)}`);
    }
    console.group('Clicked on Cell');
    console.log(cellData);
  }

  mouseOver(event: MouseEvent) {
    console.group(`mouseOver`);
    console.log(event.target);
  }

  detectSelected(event) {
    console.group(`Detect Selected`);
    console.log(event);
  }

  tableDataChanges() {
    console.warn(`Table data has been changed`);
  }
}
