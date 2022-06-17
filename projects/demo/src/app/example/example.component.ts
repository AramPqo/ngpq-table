import { Component, OnInit } from '@angular/core';
import {
  Action,
  FilterOption,
  SelectAction,
  Settings,
} from 'projects/ngpq-table/src/public-api';
import { DataService } from './services/data.service';
import { MarkdownComponent } from './markdown/markdown.component';
import { TableInputs } from '../models/table-inputs.modes';
import { Comments } from '../models/comments.model';
import { ActionsService } from './services/actions.service';

const PAGESIZE_OPTIONS = [10, 50, 80, 100, 5000];

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent extends MarkdownComponent implements OnInit {
  data: Comments[];
  settings: { [key: string]: Settings };
  filterOptions: FilterOption = new FilterOption(true, false, 2000, false);
  pageSizeOptions = PAGESIZE_OPTIONS;
  activeTab: number = 1;
  componentMarkdown: string;
  templateMarkdown: string;
  tableInputs: TableInputs;
  loader: boolean;

  actions: Action[];
  selectActions: SelectAction[];

  constructor(private dataService: DataService, private actionsService: ActionsService) {
    super();
  }

  ngOnInit() {
    this.actions = this.actionsService.actions;
    this.selectActions = this.actionsService.selectActions;

    this.createTableInputs();
    this.getTableData();
    this.updateMarkdown();
  }

  createTableInputs() {
    this.tableInputs = {
      selectActions: true,
      actions: true,
      detailsTemplate: true,
      disableResize: false,
      scrollToTop: true,
      disablePaginate: false,
      disableSort: false,
      paginatorSize: 4,
      directionLinks: true,
      filterOptions: new FilterOption(true, false, 2000, false),
    };
  }

  getSettings({ key, value }) {
    this.showLoader();
    this.checkFilterOptions(key, value);
    this.checkPaginate(key, value);

    this.tableInputs[key] = value[key];
    this.updateMarkdown();

    if (this.loader) {
      setTimeout(() => {
        this.hideLoader();
      }, 100);
    }
  }

  checkFilterOptions(key, value) {
    if (key === 'filterOptions') {
      this.filterOptions = { ...value.filterOptions };
    }
  }

  checkPaginate(key, value) {
    if (key === 'disablePaginate') {
      if (value[key]) {
        this.pageSizeOptions = [this.data.length];
      } else {
        this.pageSizeOptions = PAGESIZE_OPTIONS;
      }
    }
  }

  updateMarkdown() {
    this.defineInputs();
    this.defineMarkdown();
  }

  showLoader() {
    this.loader = true;
  }

  hideLoader() {
    this.loader = false;
  }

  toggleTabs(num: number) {
    if (this.activeTab !== num) {
      this.activeTab = num;
    }
  }

  getTableData() {
    this.settings = this.dataService.getAllData().settings;
    this.dataService.getAllData().data$.subscribe(
      data => (this.data = data),
      err => console.error(err),
    );
  }
}
