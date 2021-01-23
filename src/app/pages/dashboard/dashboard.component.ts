import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WidgetConfig } from 'app/core/models/definitions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  widgetConfig: WidgetConfig = {
    mode: 'mixed',
    itemSize: 10,
    queryString: 'Hello World',
  };

  constructor() {}

  ngOnInit() {}
}
