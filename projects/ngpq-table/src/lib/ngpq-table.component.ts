import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { FilterDetail, FilterOption } from './models/filter.model';
import { cloneDeep, createModes } from './helpers/table.util';
import { createActions, modifiedTableHeaders } from './helpers/initialize';
import { doSort, isSame, isTemplate } from './helpers/sort';
import { Action } from './models/action.model';
import { ActionEvent } from './models/action-event.model';
import { CellData } from './models/cell-click-event.model';
import { FilterService } from './shared/services/filter.service';
import { LoaderService } from './shared/services/loader.service';
import { RowData } from './models/row-click-event.model';
import { SelectAction } from './models/select-action.model';
import { SelectActionEvent } from './models/select-action-event.model';
import { SelectDataService } from './shared/services/select-data.service';
import { Settings } from './models/settings.model';
import { SortEvent } from './models/sort.model';
import { TableHeader } from './models/table-header.model';

@Component({
  selector: 'ngpq-table',
  templateUrl: './ngpq-table.component.html',
  styleUrls: ['ngpq-table.component.scss'],
})
export class NgPqTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: any[];
  @Input() settings: { [key: string]: Settings };

  @Input('pageSizeOptions') modes: number[];
  @Input() directionLinks: boolean;

  @Input() filterOptions: FilterOption;

  @Input() actions: Action[];

  @Input() detailsTemplate: TemplateRef<HTMLTemplateElement>;

  warning: HTMLElement | string = 'Data is empty';

  @Input() set noDataWarning(warning: HTMLElement | string) {
    if (warning instanceof HTMLElement) {
      const node = document.createElement('div');
      node.appendChild(warning);
      this.warning = node.innerHTML;
    } else {
      this.warning = warning;
    }
  }

  @Input() disableResize: boolean;
  @Input() disablePaginate: boolean;
  @Input() disableSort: boolean;
  @Input() paginatorSize: number = 6;

  @Input() selectActions: SelectAction[];

  @Input('scrollToTop') isScrollToTop: boolean;

  @Output() actionEvent = new EventEmitter<ActionEvent>();

  @Output() selectedActionEvent = new EventEmitter<SelectActionEvent>();
  @Output() detectSelected = new EventEmitter<any[]>();

  @Output() rowClick = new EventEmitter<RowData>();
  @Output() cellClick = new EventEmitter<CellData>();

  @Output() tableInit = new EventEmitter<undefined>();

  @Output() mouseOver = new EventEmitter<MouseEvent>();

  mainData: any[];
  private filteredData: any[];
  displayData: any[] = [];
  tableHeaders: TableHeader[];

  private _modes: number[];
  pageNumber = 1;
  pageSize: number;

  createAction: Action | null;
  isCreate: boolean;

  isSelectAll: boolean;
  private selectedValues: number[];

  filterDetails: FilterDetail[] = [];
  backlightValue: string;

  activeSort: SortEvent;

  constructor(
    public loaderService: LoaderService,
    private selectDataService: SelectDataService,
    private filterService: FilterService,
  ) {}

  ngOnInit() {
    if (!this.settings) {
      throw new Error(`'settings' property is required`);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('data' in changes && this.data?.length) {
      this.checkDataChanges();
    }

    if ('actions' in changes) {
      this.initActions();
    }

    if ('settings' in changes && this.settings) {
      this.createTableHeaders();
      this.createfilterDetails();
    }

    if ('selectActions' in changes) {
      this.initSelectTableHeader();
    }
  }

  checkDataChanges() {
    if (!this.disablePaginate) {
      if (this.modes?.length) {
        this.modes.sort((a, b) => a - b);
      } else if (this.data.length.toString().length > 1) {
        this.modes = createModes(this.data.length);
      } else {
        this.disablePaginate = true;
        this.modes = [this.data.length];
      }
    } else {
      this.modes = [this.data.length];
    }

    if (this.modes.length !== 1) {
      this._modes = [...this.modes] = [
        ...this.modes.filter(mode => mode < this.data.length),
        this.data.length,
      ];
    }

    this.pageSize = this.modes[0];
    this.createTableData();
  }

  createTableData() {
    if (Array.isArray(this.data)) {
      this.checkWrongPropertyNames();
      this.mainData = cloneDeep(this.data);

      if (this.filterService.activeFilter?.length) {
        this.data = this.filterService.fiterData(
          this.data,
          this.filterOptions?.pure,
          this.filterDetails,
        );
      }

      if (this.activeSort?.direction?.length) {
        this.sortData();
      }

      this.filteredData = cloneDeep(this.data);
      this.updateDisplayData();
    } else {
      throw new Error('Invalid data for ngpq-table');
    }
  }

  checkWrongPropertyNames() {
    const wrongProperties: string[] = [];

    this.data.forEach(d => {
      Object.keys(d).forEach((key: string) => {
        if (!(key in this.settings) && !wrongProperties.find(wp => wp === key)) {
          wrongProperties.push(key);
        }
      });
    });

    if (wrongProperties.length) {
      wrongProperties.forEach(property => {
        console.warn(`"${property}" missing in settings`);
      });
    }
  }

  initActions() {
    const { actions, createAction } = createActions(this.actions);
    this.actions = actions;
    this.createAction = createAction;
  }

  initSelectTableHeader() {
    this.tableHeaders = modifiedTableHeaders(this.selectActions, this.tableHeaders);
  }

  setDisplayData() {
    if (this.pageSize >= this.data?.length) {
      this.displayData = this.data;
    } else {
      this.displayData = this.data.slice(
        (this.pageNumber - 1) * this.pageSize,
        (this.pageNumber - 1) * this.pageSize + this.pageSize,
      );
    }
  }

  updateDisplayData(pageNumber = 1) {
    this.pageNumber = pageNumber;
    this.setDisplayData();
  }

  emitCellData(event: CellData) {
    this.cellClick.emit(event);
  }

  emitRowData(event: RowData) {
    this.rowClick.emit(event);
  }

  emitTableInit() {
    this.tableInit.emit();
  }

  sortData() {
    const { column, direction } = { ...this.activeSort };

    if (direction === '' || column === '') {
      this.loaderService.show();
      this.data = cloneDeep(this.filteredData);
    } else {
      doSort(this.data, { column, direction });
    }

    if (
      (isTemplate(this.data[0][column]) ||
        this.filteredData[0][column] !== this.data[0][column]) &&
      isSame(column, this.data)
    ) {
      this.loaderService.show();
    }

    setTimeout(() => {
      this.setDisplayData();
    }, 0);
  }

  setSort({ column, direction }: SortEvent) {
    this.activeSort = new SortEvent(column, direction);
    if (this.displayData.length > 1) {
      this.sortData();
    }
  }

  getCreateActionEvent() {
    if (this.isCreate) {
      return;
    }

    const row: any = {};
    this.tableHeaders
      .filter(t => !t.isStatic)
      .map(t => t.key)
      .forEach(v => {
        row[v] = '';
      });

    this.displayData = [{ ...row }, ...this.displayData];
    this.isCreate = true;
  }

  getActionEvent({ row, action, isCreate, close }) {
    if (!close) {
      if (isCreate) {
        this.displayData = this.displayData.filter((v, i) => i !== 0);
        this.isCreate = false;
      }
      this.actionEvent.emit(new ActionEvent(action.key, row));
    } else {
      this.isCreate = false;
      this.displayData = this.displayData.filter((v, i) => i !== 0);
    }
  }

  getSelectedAction(selectedRows: number[]) {
    this.selectedValues = selectedRows;
    this.isSelectAll = this.displayData.length === selectedRows.length;
    if (this.selectedValues?.length) {
      this.detectSelected.emit(this.createSelectedRows());
    }
  }

  emitSelectedActions(method: SelectAction) {
    if (this.createSelectedRows().length) {
      this.selectedActionEvent.emit(
        new SelectActionEvent(method, this.createSelectedRows()),
      );
    }

    this.selectDataService.selectAllData$.next(false);
  }

  createSelectedRows(): any[] {
    const selectedRows: any[] = [];
    this.selectedValues.forEach(value => {
      if (this.displayData[value]) {
        selectedRows.push(this.displayData[value]);
      }
    });

    return selectedRows;
  }

  pageChange(pageNumber: number) {
    if (this.displayData.length > 24) {
      this.loaderService.show();
    }

    setTimeout(() => {
      this.updateDisplayData(pageNumber);
    }, 0);
  }

  createfilterDetails() {
    this.filterDetails = [];
    this.tableHeaders.forEach((header, index) => {
      if (!header.disableFilter) {
        this.filterDetails[index] = new FilterDetail(header.key, header.title);
      }
    });
  }

  /**
   * should be a data type or a data type with an active filter `value`
   * @param data
   */
  getFilteredData(data: any[] | { data: any[]; value: string }) {
    if (!this.filterOptions?.byCategory && this.filterOptions?.backlight) {
      this.data = (data as { data: any[]; value: string }).data;
      this.backlightValue = (data as any).value;
    } else {
      this.data = data as any[];
    }

    if (this.data.length && this.filteredData.length !== this.data.length) {
      this.loaderService.show();
    }

    this.modes = [
      ...this._modes.filter(mode => mode < this.data.length),
      this.data.length,
    ];

    this.pageSize = this.modes[0];
    this.filteredData = cloneDeep(this.data);

    if (this.activeSort?.direction?.length && this.data?.length > 1) {
      this.sortData();
    }

    this.updateDisplayData();
  }

  createTableHeaders() {
    this.tableHeaders = Object.keys(this.settings).map((key: string) => {
      if (
        this.settings[key].renderComponent &&
        !(this.settings[key].renderComponent instanceof Function)
      ) {
        console.error(`${this.settings[key].renderComponent} is not a "Class"`);
        this.settings[key].renderComponent = null;
      }

      const {
        title,
        className,
        disableFilter,
        disableSort,
        width,
        form,
        renderComponent,
      } = this.settings[key];

      return {
        key,
        title,
        className,
        disableFilter,
        disableSort,
        width,
        form,
        renderComponent,
      };
    });
  }

  setMode(mode: number) {
    if (this.pageSize !== mode) {
      this.loaderService.show();
    }

    this.pageSize = mode;
    setTimeout(() => {
      this.updateDisplayData();
    }, 0);
  }

  scrollToTop(tableContainer: HTMLDivElement) {
    if (this.isScrollToTop) {
      tableContainer.scrollIntoView();
    }
  }

  ngOnDestroy() {
    this.loaderService.loadData$.complete();
    this.selectDataService.selectAllData$.complete();
    this.filterService.activeFilter = '';
  }
}
