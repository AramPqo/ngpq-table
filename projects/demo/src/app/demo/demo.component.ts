import { Component, Injector } from '@angular/core';
import { Settings } from 'projects/ngpq-table/src/public-api';
import { MARKDOWN_MODULE, MARKDOWN_COMPONENT } from './markdown/templates';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  animate: boolean;
  markdownModule = MARKDOWN_MODULE;
  markdownComponent = MARKDOWN_COMPONENT;

  settings: { [key: string]: Settings } = {
    id: {
      title: 'ID',
    },
    name: {
      title: 'Name',
    },
    email: {
      title: 'Email',
    },
  };

  data: Comment[];

  constructor(private injector: Injector) {
    this.data = injector.get('comments');
  }

  copytext() {
    this.animate = true;
    const selBox = document.createElement('textarea');
    selBox.value = `npm install ngpq-table`;
    document.body.appendChild(selBox);
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    setTimeout(() => {
      this.animate = !this.animate;
    }, 10);
  }
}
