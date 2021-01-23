import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetConfig } from 'app/core/models/definitions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  /** Config could in real-world scenario be provided by DI,
   * fetched from remote or simply given as a component input
   */
  widgetConfig: WidgetConfig = {
    mode: 'mixed',
    itemSize: 10,
    queryString: 'Hello World',
  };

  constructor() {}
}
