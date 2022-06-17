import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TableHeader } from '../../../models/table-header.model';

@Component({
  selector: '[ngpq-form]',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() tableHeaders: TableHeader[];
  @Input() row: any;

  @Output() formResult = new EventEmitter();
  @Output() cancel = new EventEmitter();

  form: FormGroup;
  selectedHeaderIndex: number | null;
  selectItems = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();

    if (this.tableHeaders.find(header => header?.form?.type)) {
      this.tableHeaders.forEach((header: TableHeader) => {
        if (
          (header?.form?.type === 'select' || header?.form?.type === 'radio') &&
          header.form.control
        ) {
          this.selectItems[header.key] = header.form.control[0];
          if (Array.isArray(this.form.value[header.key])) {
            this.patchFormValue(this.form.value[header.key][0], header);
          }
        }
      });
    }
  }

  createForm() {
    const group = {};

    this.tableHeaders.forEach((v: TableHeader) => {
      if (v.form) {
        const key = Object.keys(this.row).find(r => r === v.key)
          ? Object.keys(this.row).find(r => r === v.key)
          : null;

        if (!v.isStatic && key) {
          let value = this.row[v.key]?.template
            ? this.row[v.key]?.value
            : this.row[v.key];

          if (
            !value &&
            'control' in v.form &&
            v.form.control?.length &&
            v.form.control[0]
          ) {
            value = v.form.control[0];
          }

          if (
            v.form.control &&
            v.form.control.length >= 1 &&
            v.form.control.length[0] !== false
          ) {
            group[key] = [value, ...v.form.control.filter((fm, i) => i !== 0)];
          } else if (v.form.disabled) {
            group[key] =
              typeof this.row[key] === 'object' ? this.row[key].value : this.row[key];
          } else {
            group[key] = v.form.control;
          }
        } else {
          console.warn(`"${v.key}" Not found`);
        }
      }
    });

    this.form = this.fb.group(group);
  }

  patchFormValue(value: any, header: TableHeader) {
    this.form.get(header.key)?.patchValue(value);
    this.selectedHeaderIndex = null;
  }

  save() {
    if (this.form.value) {
      this.formResult.emit(this.form.value);
    } else {
      console.warn(`Form is invalid`);

      Object.keys(this.form.value).forEach(key => {
        if (this.form.get(key)?.errors) {
          console.error(`${key} is INVALID`, this.form.get(key)?.errors);
        }
      });
    }
  }

  close() {
    this.cancel.emit();
  }
}
