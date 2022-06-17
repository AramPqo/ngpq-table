import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { IconComponent } from './icon/icon.component';
import { NgModule } from '@angular/core';
import { SafePipe } from '../pipes/safe/safe.pipe';

@NgModule({
  declarations: [DropdownComponent, IconComponent, SafePipe],
  imports: [CommonModule],
  exports: [DropdownComponent, IconComponent, SafePipe, CommonModule],
})
export class SharedModule {}
