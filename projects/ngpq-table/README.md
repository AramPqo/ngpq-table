# Angular Table for large and small projects
`ngpq-table` Component

## Installation
```
npm install ngpq-table
```

## Minimal Usage Example

app.module.ts
```typescript
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
```

app.component.ts
```typescript
import { Component } from '@angular/core';
import { Settings } from 'ngpq-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  settings: { [key: string]: Settings; } = {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Name'
    },
    Email: {
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

```
app.component.html
```html
<ngpq-table 
   [data]="data" 
   [settings]="settings">
</ngpq-table>
```

![alt text](https://i.ibb.co/Yk6wvdN/ngpq-table-basic.png) 

## Features
- Flexible possibility of using sync. or async. data
- Filtering (Smart or Basic)
- Sorting (asc, desc, original position)
- Pagination
- Resizing
- Actions (Inline Add/Edit at your service)
- Multiple (Select) Actions

All Features and Example can be viewed here [Here](https://github.com/user/repo