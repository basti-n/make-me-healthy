import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WidgetConfig } from 'app/core/models/definitions';
import configs from '../../../assets/configs/widget.config.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  widgetConfigs: WidgetConfig[];

  constructor() {}

  ngOnInit() {
    this.widgetConfigs = configs.widgetConfigs as WidgetConfig[];
  }
}
