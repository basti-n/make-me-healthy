import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-widget-item-heading',
  templateUrl: './widget-item-heading.component.html',
  styleUrls: ['./widget-item-heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetItemHeadingComponent {
  @Input() imageUrl: string;
  @Input() headline: string;

  constructor() {}
}
