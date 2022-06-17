import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FilterDetail, FilterOption } from '../../../models/filter.model';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FilterService } from '../../../shared/services/filter.service';
import { Subject } from 'rxjs';

// needs to change
@Component({
  selector: 'ngpq-usual-filter',
  templateUrl: './usual-filter.component.html',
  styleUrls: ['./../filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsualFilterComponent implements OnInit, OnDestroy {
  @ViewChild('filterEl') filterEl: ElementRef<HTMLInputElement>;

  @Input() data: any[];
  @Input() filterOptions: FilterOption;
  @Input() filterDetails: FilterDetail[] = [];
  activeFilterValue: string;

  private search$: Subject<string> = new Subject();
  private filteredData: any[] = [];

  @Output() activeFilterEmit = new EventEmitter();
  @Output() emitFilteredData = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef, private filterService: FilterService) {}

  ngOnInit() {
    if (this.filterService.activeFilter?.length) {
      this.activeFilterValue = this.filterService.activeFilter as string;
    }

    const ms =
      this.filterOptions.typeaheadTime && this.filterOptions.typeaheadTime > 2000
        ? this.filterOptions.typeaheadTime
        : 2000;
    this.search$
      .pipe(distinctUntilChanged(), debounceTime(ms))
      .subscribe((value: string) => {
        if (value.length !== 0) {
          this.filterData(value.toString().trim());
        }
      });
  }

  next() {
    this.search$.next(this.filterEl.nativeElement.value);
  }

  filterData(value: string) {
    this.filterService.activeFilter = value;
    this.filteredData = this.filterService.doUsualFilter(
      this.data,
      this.filterDetails,
      this.filterOptions?.pure,
    );

    this.activeFilterValue = value;
    if (this.filterOptions.backlight) {
      this.emit(this.filteredData, value);
    } else {
      this.emit(this.filteredData);
    }

    this.filterEl.nativeElement.value = '';
  }

  reset() {
    this.activeFilterValue = this.filterService.activeFilter = '';
    this.filteredData = [];
    this.emit();
  }

  emit(data: any[] = this.data, value?: string) {
    if (this.filterOptions.backlight) {
      this.emitFilteredData.emit({ data, value });
    } else {
      this.emitFilteredData.emit(data);
    }

    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.search$.complete();
  }
}
