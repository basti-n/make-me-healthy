import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { WidgetItem } from 'app/core/models/definitions';

@Component({
  selector: 'app-widget-item',
  templateUrl: './widget-item.component.html',
  styleUrls: ['./widget-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetItemComponent {
  @Input() item: WidgetItem;

  constructor() {}
}
