import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BacklightPipe } from '../../pipes/backlight/backlight.pipe';
import { CustomViewComponent } from './custom-view/custom-view.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TbodyComponent } from './tbody.component';

@NgModule({
  declarations: [TbodyComponent, FormComponent, CustomViewComponent, BacklightPipe],
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  exports: [TbodyComponent],
})
export class TbodyModule {}
