import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cloneDeep } from 'projects/ngpq-table/src/lib/helpers/table.util';
import { debounceTime } from 'rxjs/operators';
import { TableInputs } from '../../models/table-inputs.modes';

@Component({
  selector: 'example-settings',
  templateUrl: './example-settings.component.html',
  styleUrls: ['./example-settings.component.scss'],
})
export class ExampleSettingsComponent implements OnInit {
  @Input() tableInputs: TableInputs | any;

  @Output() formKey = new EventEmitter<{ key: string; value: Comment }>();
  @Output() emitEntityKey = new EventEmitter<string>();

  form: FormGroup;
  oldForm: FormGroup;
  isShow: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const formValue = { ...this.tableInputs };
    formValue.filterOptions = this.fb.group(this.tableInputs.filterOptions);

    this.form = this.fb.group(formValue);
    this.oldForm = cloneDeep(this.form.value);

    this.form.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      const key = Object.keys(value).find(k => value[k] != this.oldForm[k]) ?? '';
      if (key === 'typeaheadTime' && this.form.get('typeaheadTime')?.value < 2000) {
        this.form.patchValue({ typeaheadTime: 2000 });
      }
      this.oldForm = cloneDeep(this.form.value);
      this.formKey.emit({ key, value });
    });
  }

  toggle() {
    this.isShow = !this.isShow;
  }
}
