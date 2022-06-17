import { FilterComponent } from './components/filter/filter.component';
import { FilterModule } from './components/filter/filter.module';
import { FilterService } from './shared/services/filter.service';
import ICONS from '../assets/icons/icons';
import { LoaderService } from './shared/services/loader.service';
import { NgModule } from '@angular/core';
import { NgPqPaginationModule } from 'ngpq-pagination';
import { NgPqTableComponent } from './ngpq-table.component';
import { ResizeModule } from 'ngpq-table-resize';
import { SelectDataService } from './shared/services/select-data.service';
import { SharedModule } from './shared/shared.module';
import { TbodyModule } from './components/tbody/tbody.module';
import { TheadModule } from './components/thead/thead.module';

@NgModule({
  declarations: [NgPqTableComponent],
  imports: [
    SharedModule,
    TheadModule,
    TbodyModule,
    FilterModule,
    NgPqPaginationModule,
    ResizeModule,
  ],
  exports: [NgPqTableComponent],
  entryComponents: [FilterComponent],
  providers: [
    { provide: 'Icons', useValue: ICONS },
    SelectDataService,
    LoaderService,
    FilterService,
  ],
})
export class NgPqTableModule {}
