import { FormsModule } from '@angular/forms';
import { HeaderCellClassPipe } from './table-header-cell-class.pipe';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TheadComponent } from './thead.component';

@NgModule({
  declarations: [
    TheadComponent,
    HeaderCellClassPipe
  ],
  imports: [
    SharedModule,
    FormsModule
  ],
  exports: [
    TheadComponent
  ]
})
export class TheadModule { }
