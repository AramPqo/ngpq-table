import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'ngpq-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() items: any[] = [];
  @Input() defaultItem: string | number;
  @Input() displayName: string;

  @Output() dropdownValue = new EventEmitter();

  isShow: boolean;

  constructor() {}

  toggle() {
    this.isShow = !this.isShow;
  }

  emit(item: any, e: MouseEvent) {
    e.stopPropagation();
    this.dropdownValue.emit(item);
    this.toggle();
  }
}
