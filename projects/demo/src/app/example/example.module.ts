import { CommonModule } from '@angular/common';
import { EmailComponent } from './custom-email/custom-email.component';
import { ExampleComponent } from './example.component';
import { ExampleSettingsComponent } from './example-settings/example-settings.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from '@angular/core';
import { NgPqTableModule } from 'projects/ngpq-table/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { ActionsService } from './services/actions.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    ExampleComponent,
    ExampleSettingsComponent,
    EmailComponent,
    TableComponent,
  ],
  imports: [
    NgPqTableModule,
    CommonModule,
    ReactiveFormsModule,
    MarkdownModule.forChild(),
  ],
  providers: [ActionsService, DataService],
})
export class ExampleModule {}
