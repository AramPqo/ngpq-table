import { TableInputs } from '../../models/table-inputs.modes';
import { BASIC_DATA, DETAILS_TEMPLATE, NO_DATA_WARNING } from './templates';

enum TEMPLATE_TYPE_INPUT {
  DETAILS_TEMPLATE = 'detailsTemplate',
  NO_DATA_WARNING = 'noDataWarning',
}

export class MarkdownComponent {
  tableInputs: TableInputs;
  inputs: Array<{ key: string; template: string; ts: string | null }>;
  templateMarkdown: string;
  componentMarkdown: string;
  basicData = BASIC_DATA;

  defineMarkdown() {
    this.templateMarkdown = `
    \`\`\`html
    <ngpq-table 
        [data]="data" 
        [settings]="settings"
${this.inputs.map(v => v.template).join('\n')}
        ${this.tableInputs.detailsTemplate ? `[detailsTemplate]="tableDetails"` : ''}>
    </ngpq-table>

${this.tableInputs.detailsTemplate ? DETAILS_TEMPLATE : ``}
${this.tableInputs.noDataWarning ? NO_DATA_WARNING : ``}
`;

    this.componentMarkdown = `
    \`\`\`typescript
    import { Component } from '@angular/core';
    import { EmailComponent } from './custom-email/custom-email.component';
    import { Settings, Action, FilterOption, SelectAction } from 'ngpq-table';
    import { TableInputs } from '../models/table-inputs.modes';

    @Component({
      selector: 'app-root',
      templateURL: './app.component.html'
    })
    export class AppComponent {
      ${this.basicData}
      ${this.inputs.map(v => v.ts).join('\n      ')}
    }
    `;
  }

  defineInputs() {
    this.inputs = Object.keys(this.tableInputs)
      .map(v => {
        const result = {
          key: v,
          template: `        [${v}]="${v}"`,
          ts:
            v !== TEMPLATE_TYPE_INPUT.DETAILS_TEMPLATE &&
            v !== TEMPLATE_TYPE_INPUT.NO_DATA_WARNING
              ? this.getTsVariable(v)
              : null,
        };
        return result;
      })
      .filter(v => this.tableInputs[v.key] && v.ts);
  }

  getTsVariable(key) {
    if (this.isFormValue(key)) {
      return `\n      ${this.defineInputsKey(key)} = ${this.preettyFyObject(this[key])};`;
    } else {
      return `${key} = ${this.tableInputs[key]};`;
    }
  }

  isFormValue(key: string): boolean {
    return key === 'selectActions' || key === 'actions' || key === 'filterOptions';
  }

  defineInputsKey(key): string {
    let result;

    switch (key) {
      case 'selectActions':
        result = `${key}: SelectAction[]`;
        break;
      case 'actions':
        result = `${key}: Action[]`;
        break;
      case 'filterOptions':
        result = `${key}: FilterOption`;
        break;
    }

    return result;
  }

  preettyFyObject(items: Object[] | Object) {
    if (!Array.isArray(items)) {
      items = [items];
    }

    const result: Object[] = [];

    (items as Object[]).forEach(obj => {
      const prettyObj = JSON.stringify(obj, null, 7).replaceAll('}', '      }');

      result.push(prettyObj);
    });

    return result;
  }
}
