import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import { IconModel, Icons, SVGModel } from '../../models/icon.model';

@Component({
  selector: 'ngpq-icon',
  templateUrl: './icon.component.svg',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  @Input('icon') iconName: Icons;
  icon: SVGModel;

  constructor(private injector: Injector) {}

  ngOnInit() {
    const icons: IconModel = this.injector.get('Icons');
    this.icon = icons[this.iconName];
  }
}
