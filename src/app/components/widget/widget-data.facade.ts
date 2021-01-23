import { Injectable } from '@angular/core';
import { WidgetConfig } from 'app/core/models/definitions/widget.config';
import { WidgetItem } from 'app/core/models/definitions/widget.item';
import { WeatherDay } from 'app/core/models/dtos';
import { SearchItemDTO } from 'app/core/models/dtos/stackexchange-search-item.dto';
import {
  StackExchangeSearchService,
  WeatherSearchService,
} from 'app/core/services/search';
import { WeatherUiService } from 'app/core/services/ui';
import { pickRandomValues } from 'app/core/utils/lists';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WidgetDataFacade {
  DEFAULT_WIDGET_SIZE = 10;

  constructor(
    private readonly WeatherSearchService: WeatherSearchService,
    private readonly stackExchangeService: StackExchangeSearchService,
    private readonly weatherUiService: WeatherUiService
  ) {}

  public getData$(config: WidgetConfig): Observable<WidgetItem[]> {
    switch (config.mode) {
      case 'weather':
        return this.getWeather$(config.itemSize);
      case 'stackoverflow':
        return this.getStackoverflow$(config.itemSize, config.queryString);
      default:
        return this.getMixed$(config.itemSize);
    }
  }

  private getWeather$(
    size: number = this.DEFAULT_WIDGET_SIZE
  ): Observable<WidgetItem[]> {
    return this.WeatherSearchService.search().pipe(
      map((data) =>
        pickRandomValues(data.days, size).map((day) => this.fromWeatherDay(day))
      )
    );
  }

  private getStackoverflow$(
    size: number = this.DEFAULT_WIDGET_SIZE,
    queryString?: string
  ): Observable<WidgetItem[]> {
    return this.stackExchangeService
      .search(queryString)
      .pipe(
        map((data) =>
          data.items
            .slice(0, size)
            .map((item) => this.fromStackoverflowItem(item))
        )
      );
  }

  private getMixed$(
    size: number = this.DEFAULT_WIDGET_SIZE,
    queryString?: string
  ): Observable<WidgetItem[]> {
    return combineLatest([
      this.getWeather$(size / 2),
      this.getStackoverflow$(size / 2, queryString),
    ]).pipe(
      map(([weather, stackoverflow]) =>
        weather.reduce(
          (acc, curr, i) =>
            curr && stackoverflow[i]
              ? [...acc, curr, stackoverflow[i]]
              : [...acc, curr],
          []
        )
      )
    );
  }

  private fromWeatherDay(weatherDay: WeatherDay): WidgetItem {
    return {
      headline: `${weatherDay.Datum} - ${weatherDay.Zeit} Uhr`,
      bullets: [
        { label: 'Temperatur', value: `${weatherDay['Temp. A.']} Grad` },
        { label: 'Luftdruck', value: `${weatherDay.Luftdruck} hPa` },
        { label: 'Niederschlag', value: `${weatherDay.Regen} l/m²` },
      ],
      imageUrl: this.weatherUiService.getIcon(weatherDay),
    };
  }

  private fromStackoverflowItem(item: SearchItemDTO): WidgetItem {
    return {
      headline: item.title,
      bullets: [
        { label: 'Answer Count', value: item.answer_count },
        { label: 'View Count', value: item.view_count },
        { label: 'Topics', value: item.tags.join(' | ') },
      ],
      imageUrl: item.owner?.profile_image,
    };
  }
}
