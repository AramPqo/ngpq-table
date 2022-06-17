import { CellData, Settings } from 'projects/ngpq-table/src/public-api';
import { Component, Injector, OnInit } from '@angular/core';
import { State, StateInfo } from './documentation.model';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  title = 'Common';
  inputSettings: { [key: string]: Settings };
  outputSettings: { [key: string]: Settings } = {};

  menu: Array<StateInfo> = [
    {
      key: 'common',
      title: 'Common',
    },
    {
      key: 'settings',
      title: 'Settings',
    },
    {
      key: 'form',
      title: 'Form',
    },
    // {
    //   key: 'filterOptions',
    //   title: 'Filter Options'
    // },
    // {
    //   key: 'actions',
    //   title: 'Action'
    // },
    {
      key: 'selectActions',
      title: 'Select Action',
    },
  ];

  activeMenuIndex = 0;
  headers: StateInfo[] = [];
  state: State;

  constructor(private injector: Injector) {}

  ngOnInit() {
    this.inputSettings = this.createSettings('input');
    this.outputSettings = this.createSettings('output');
    this.initState(this.menu[0], 0);
  }

  initState(menu: StateInfo, index: number) {
    this.headers = [];
    this.state = this.injector.get(menu.key);

    Object.keys(this.state).forEach(key => {
      this.headers.push({
        key,
        title: key.replace(/[A-Z]/g, t => ` ${t.toLowerCase()}`),
      });
    });

    this.title = menu.title;
    this.activeMenuIndex = index;
  }

  createSettings(title: string): { [key: string]: Settings } {
    const settins = {};
    settins[title] = {
      title,
      width: '450px',
    };

    Object.assign(settins, {
      type: {
        title: 'Type',
        className: 'type-content',
        width: '30%',
      },
      description: {
        width: '60%',
        title: 'Description',
      },
    });

    return settins;
  }

  getCellData(cellData: CellData) {
    const el = cellData.event.target;

    if (el instanceof HTMLAnchorElement && el.getAttribute('link')) {
      const link = el.getAttribute('link');
      const activMenu = this.menu
        .map((v, i) => (link === v.key ? { item: v, index: i } : null))
        .find(v => v);

      if (activMenu) {
        this.initState(activMenu?.item, activMenu?.index);
      }
    }
  }
}
