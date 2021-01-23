import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WidgetConfig } from 'app/core/models/definitions/widget.config';
import { WidgetItem } from 'app/core/models/definitions/widget.item';
import { Observable } from 'rxjs';
import { WidgetDataFacade } from './widget-data.facade';
import { Location } from '@angular/common';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent implements OnInit {
  data$: Observable<WidgetItem[]>;

  constructor(
    private readonly location: Location,
    private readonly widgetFacade: WidgetDataFacade
  ) {}

  ngOnInit(): void {
    this.data$ = this.getData$(this.location.getState() as WidgetConfig);
  }

  getData$(config: WidgetConfig): Observable<WidgetItem[]> {
    return this.widgetFacade.getData$(config);
  }
}
