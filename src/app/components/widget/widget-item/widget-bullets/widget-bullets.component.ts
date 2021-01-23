import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { WidgetItem } from 'app/core/models/definitions';

@Component({
  selector: 'app-widget-bullets',
  templateUrl: './widget-bullets.component.html',
  styleUrls: ['./widget-bullets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetBulletsComponent {
  @Input() bullets: WidgetItem['bullets'];
  constructor() {}
}
