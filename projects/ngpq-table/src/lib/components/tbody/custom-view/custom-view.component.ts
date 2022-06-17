import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TableHeader } from '../../../models/table-header.model';
import { ViewData } from '../../../models/custom-view.model';

@Component({
  selector: 'custom-view-component',
  template: ` <ng-container #viewContainer></ng-container> `,
})
export class CustomViewComponent implements OnInit, OnDestroy {
  @Input() header: TableHeader;
  @Input() data: any;

  private component: ComponentRef<any>;

  @ViewChild('viewContainer', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {
    const renderComponent = this.header.renderComponent;
    const componentFactory = this.cfr.resolveComponentFactory(renderComponent);
    this.component = this.viewContainer.createComponent(componentFactory);

    Object.assign(this.component.instance, this.patchViewData());
  }

  patchViewData(): ViewData {
    return {
      value: this.data[this.header.key],
      rowData: this.data,
    };
  }

  ngOnDestroy() {
    if (this.component) {
      this.component.destroy();
    }
  }
}
