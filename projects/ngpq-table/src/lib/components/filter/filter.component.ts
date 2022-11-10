import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FilterData, FilterDetail, FilterOption } from '../../models/filter.model';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { Subscription } from 'rxjs';
import { UsualFilterComponent } from './usual-filter/usual-filter.component';

// needs to change
@Component({
  selector: 'ngpq-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('filterContainer', { read: ViewContainerRef, static: true })
  filterContainer: ViewContainerRef;

  @Input() data: any[];
  @Input() mainData: any[];
  @Input() filterDetails: FilterDetail[];

  @Input() filterOptions: FilterOption = new FilterOption(true, false, 2000, false);

  componentRef: ComponentRef<CategoryFilterComponent | UsualFilterComponent>;
  instanceSub: Subscription;

  @Output() emitFilteredData = new EventEmitter();

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {
    this.create();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      'mainData' in changes &&
      this.mainData.length &&
      !changes.mainData.isFirstChange()
    ) {
      this.componentRef.instance.data = this.data;
      if (this.filterOptions.byCategory) {
        (this.componentRef as ComponentRef<CategoryFilterComponent>).instance.mainData =
          this.mainData;
      }
    }

    if ('filterDetails' in changes && !changes.filterDetails.isFirstChange()) {
      this.componentRef.instance.filterDetails = this.filterDetails;
    }
  }

  create() {
    this.filterContainer.clear();
    let componentFactory: ComponentFactory<
      CategoryFilterComponent | UsualFilterComponent
    >;

    if (this.filterOptions.byCategory) {
      componentFactory = this.cfr.resolveComponentFactory(CategoryFilterComponent);
    } else {
      componentFactory = this.cfr.resolveComponentFactory(UsualFilterComponent);
    }

    this.componentRef = this.filterContainer.createComponent(componentFactory);
    this.createComponentInstance(this.componentRef.instance);

    this.instanceSub = this.componentRef.instance.emitFilteredData.subscribe(
      (data: any[] | FilterData) => this.emitFilteredData.emit(data),
    );
  }

  createComponentInstance(instance) {
    instance.data = this.mainData;
    instance.filterDetails = this.filterDetails;
    instance.filterOptions = this.filterOptions;

    if (this.filterOptions.byCategory) {
      instance.mainData = this.mainData;
    }
  }

  ngOnDestroy() {
    if (this.instanceSub) {
      this.instanceSub.unsubscribe();
    }
  }
}
