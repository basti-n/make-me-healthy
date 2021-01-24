import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { widgetAnimation } from 'app/core/animations';
import { WidgetConfig } from 'app/core/models/definitions';
import configs from '../../../assets/configs/widget.config.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [widgetAnimation],
})
export class DashboardComponent implements OnInit {
  widgetConfigs: WidgetConfig[];

  constructor() {}

  ngOnInit() {
    this.widgetConfigs = configs.widgetConfigs as WidgetConfig[];
  }

  prepareRoute(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.animations;
  }
}
