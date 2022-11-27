import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';

import {
  ACTION,
  COMMON,
  FILTER_OPTIONS,
  FORM,
  SELECT_ACTION,
  SETTINGS,
} from './state/state';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { NgModule } from '@angular/core';
import { NgPqTableModule } from 'projects/ngpq-table/src/public-api';

const routes: Routes = [{ path: '', component: DocumentationComponent }];

@NgModule({
  declarations: [DocumentationComponent],
  imports: [CommonModule, NgPqTableModule, RouterModule.forChild(routes)],
  providers: [
    { provide: 'common', useValue: COMMON },
    { provide: 'settings', useValue: SETTINGS },
    { provide: 'form', useValue: FORM },
    { provide: 'filterOptions', useValue: FILTER_OPTIONS },
    { provide: 'actions', useValue: ACTION },
    { provide: 'selectActions', useValue: SELECT_ACTION },
  ],
})
export class DocumentationModule {}
