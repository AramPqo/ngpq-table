export const MARKDOWN_MODULE = `
\`\`\`typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgPqTableModule } from 'ngpq-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgPqTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

export const MARKDOWN_COMPONENT = `
\`\`\`typescript
import { Component } from '@angular/core';
import { Settings } from 'ngpq-table';

@Component({
  selector: 'app-root',
  template: \`
    <ngpq-table 
      [data]="data" 
      [settings]="settings">
    </ngpq-table>
  \`
})
export class AppComponent {
  settings: { [key: string]: Settings; } = {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Name'
    },
    email: {
      title: 'Email'
    }
  };
  
  data = [
    {
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz"
    },
    {
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com"
    },
    ...
  ];
}
`;
