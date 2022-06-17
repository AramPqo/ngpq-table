import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FilterDetail, FilterOption } from '../../../models/filter.model';
import { FilterService } from '../../../shared/services/filter.service';
// needs to change

@Component({
  selector: 'ngpq-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./../filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFilterComponent implements OnInit {
  @Input() data: any[];
  @Input() mainData: any[];
  @Input() filterOptions: FilterOption;
  @Input() filterDetails: FilterDetail[] = [];

  filteredData: any[];
  activeFilters: FilterDetail[] = [];
  activeCategory: FilterDetail;

  @Output() emitFilteredData = new EventEmitter();

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    if (this.filterService.activeFilter?.length) {
      (this.filterService?.activeFilter as FilterDetail[]).forEach((af, i) => {
        const { key, title, value } = af;
        this.activeFilters[i] = new FilterDetail(key, title, value);
      });
    }

    const index = this.activeFilters?.length ? this.activeFilters.length - 1 : 0;
    const { key, title } = this.activeFilters?.length
      ? this.activeFilters[index]
      : this.filterDetails[index];
    this.activeCategory = new FilterDetail(key, title);
  }

  isSame(value) {
    return this.activeFilters.find(af =>
      af.key === this.activeCategory.key
        ? this.filterOptions.pure
          ? af.value.toLowerCase().indexOf(value.toLowerCase()) !== 1
          : af.value.toLowerCase() === value.toLowerCase()
        : null,
    );
  }

  getFilterDetails(category) {
    this.activeCategory = { ...category };
  }

  setValue(el: HTMLInputElement) {
    if (el.value.trim().length && !this.isSame(el.value.toString())) {
      this.filterData(el.value.trim());
    }

    el.value = '';
  }

  filterData(value: string) {
    this.filterDetails.forEach(detail => {
      const { key, title } = this.activeCategory;

      if (detail.key === key && value.length !== 0) {
        this.filteredData =
          !this.data.length || this.activeFilters.filter(v => v.key === key).length
            ? this.mainData
            : this.data;

        this.activeFilters = [
          ...this.activeFilters.filter(v => v.key !== key),
          new FilterDetail(key, title, value),
        ];

        this.data = this.filterService.doCategoryFilter(
          this.filteredData,
          key,
          value,
          this.filterOptions.pure,
        );

        if (
          this.activeFilters.length > 1 &&
          this.filteredData.length === this.mainData.length
        ) {
          this.activeFilters
            .filter(filter => filter.key !== key)
            .forEach(f => {
              this.data = this.filterService.doCategoryFilter(
                this.data,
                f.key,
                f.value,
                this.filterOptions.pure,
              );
            });
        }

        this.emit(this.data);
      }
    });
  }

  resetFilter(activeFilter?: string) {
    this.activeFilters = this.activeFilters.filter(af => af.key !== activeFilter);
    if (activeFilter?.length && this.activeFilters?.length) {
      const lastFilter = this.activeFilters[this.activeFilters.length - 1];
      this.activeCategory = new FilterDetail(lastFilter.key, lastFilter.title);
      this.filterData(lastFilter.value);
    } else {
      this.reset();
    }
  }

  reset() {
    this.activeFilters = [];
    this.data = [];
    this.emit(this.mainData);
  }

  emit(data: any[]) {
    this.filterService.activeFilter = this.activeFilters;
    this.emitFilteredData.emit(data);
  }
}
