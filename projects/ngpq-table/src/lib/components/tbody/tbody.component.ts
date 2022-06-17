import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import { Action } from '../../models/action.model';
import { CellData } from '../../models/cell-click-event.model';
import { LoaderService } from '../../shared/services/loader.service';
import { RowData } from '../../models/row-click-event.model';
import { SelectDataService } from '../../shared/services/select-data.service';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: '[ngpq-tbody]',
  templateUrl: './tbody.component.html',
  styleUrls: ['./tbody.component.scss'],
})
export class TbodyComponent implements OnChanges, OnInit, AfterViewInit {
  @ViewChildren('displayedDataList') displayedDataList: QueryList<HTMLTableCellElement>;

  @Input() displayData: any[];
  @Input() tableHeaders: TableHeader[];
  @Input() detailsTemplate: TemplateRef<any>;
  @Input() actions: Action[];
  @Input() createAction: Action | null;
  @Input() isCreate: boolean;
  @Input() backlightValue: string;
  @Input() selectAll = false;

  @Output() cellClickEvent = new EventEmitter<CellData>();
  @Output() rowClickEvent = new EventEmitter<RowData>();

  @Output() selectedActionEvent = new EventEmitter<number[]>();
  @Output() actionEvent = new EventEmitter<any>();

  @Output() tableInit = new EventEmitter();

  selectedRowIndex: number | null = null;
  selectedHeaderIndex: number | null = null;
  details: any;
  selectedRows = {};
  showForm: boolean;
  showDetails: boolean;
  isSelectAll = false;
  formValue: any;

  constructor(
    private selectDataService: SelectDataService,
    public loaderService: LoaderService,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if ('isCreate' in changes && this.isCreate && this.createAction) {
      this.getActionEvent(this.displayData[0], this.createAction, 0);
      this.tableInit.emit();
    }

    if (
      'displayData' in changes &&
      this.displayData.length &&
      changes.displayData.isFirstChange()
    ) {
      setTimeout(() => {
        this.tableInit.emit();
        this.loaderService.hide();
      }, 0);
    }
  }

  ngOnInit() {
    this.selectDataService.selectAllData$.subscribe((isSelectAll: boolean) => {
      this.isSelectAll = isSelectAll;
      this.displayData.forEach((data, i) => {
        this.selectedRows[i] = this.isSelectAll;
      });
      this.emitSelected();
      this.selectAll = !this.selectAll;
    });
  }

  ngAfterViewInit() {
    this.displayedDataList.changes.subscribe(() => {
      this.tableInit.emit();
      setTimeout(() => {
        this.loaderService.hide();
      }, 0);
    });
  }

  getSelectedRows(): number[] {
    const selectedRows: number[] = [];
    for (const i in this.selectedRows) {
      if (this.selectedRows[i]) {
        selectedRows.push(+i as number);
      }
    }

    return selectedRows;
  }

  emitSelected() {
    this.selectedActionEvent.emit(this.getSelectedRows());
  }

  getRowData(row: any, index: number, event: MouseEvent) {
    if (!this.detailsTemplate) {
      this.rowClickEvent.emit(new RowData(row, index, event));
    } else if (!this.showForm) {
      this.viewDetails(row, index, event);
    }
  }

  getCellData(row: any, header: TableHeader, index: number, event: MouseEvent) {
    if (!this.detailsTemplate) {
      this.stopEventPropogation(event);
    }

    this.cellClickEvent.emit(
      new CellData(row, header.key, index, row[header.key], event),
    );
  }

  viewDetails(row: any, index: number, event?: MouseEvent) {
    if (event) {
      this.stopEventPropogation(event);
    }

    if (this.detailsTemplate) {
      if (this.selectedRowIndex === index) {
        this.selectedRowIndex = null;
        return;
      }

      this.details = row;
      this.selectedRowIndex = index;
      this.showDetails = true;
    }
  }

  getActionEvent(row: any, action: Action, rowIndex: number, event?: MouseEvent) {
    if (event) {
      this.stopEventPropogation(event);
    }

    if (this.showDetails) {
      this.showDetails = false;
    }

    if (action.isUpdate || this.isCreate) {
      this.showForm = true;
      this.selectedRowIndex = rowIndex;
      this.formValue = row;
    } else {
      this.actionEvent.emit({ row, action });
    }
  }

  save(value: any) {
    const action = this.isCreate ? this.createAction : this.actions.find(v => v.isUpdate);
    const row = { ...this.displayData[this.selectedRowIndex as number], ...value };

    this.actionEvent.emit({ row, action, isCreate: this.isCreate });
    this.selectedRowIndex = null;
    this.showForm = false;
  }

  closeForm() {
    if (this.isCreate) {
      this.actionEvent.emit({ close: true });
    }

    this.selectedRowIndex = null;
    this.showForm = false;
  }

  stopEventPropogation(event: MouseEvent) {
    event.stopPropagation();
  }
}
