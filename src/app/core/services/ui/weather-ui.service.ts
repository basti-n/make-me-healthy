import { Injectable } from '@angular/core';
import { WeatherDay } from 'app/core/models/dtos';

enum UiWeatherTypes {
  RAINY,
  SUNNY,
  SNOWY,
  DEFAULT,
}

@Injectable({ providedIn: 'root' })
export class WeatherUiService {
  private readonly iconRegistry = new Map<UiWeatherTypes, string>([
    [UiWeatherTypes.SUNNY, 'sunny'],
    [UiWeatherTypes.RAINY, 'rain'],
    [UiWeatherTypes.SNOWY, 'snow'],
    [UiWeatherTypes.DEFAULT, 'cloud'],
  ]);

  private readonly path = 'assets/images/widgets';

  constructor() {}

  getIcon(weatherDay: WeatherDay): string {
    return `${this.path}/${this.iconRegistry.get(
      this.getWeatherType(weatherDay)
    )}.svg`;
  }

  private getWeatherType(weatherDay: WeatherDay): UiWeatherTypes {
    if (this.isRaining(weatherDay)) {
      return this.isWinter(weatherDay)
        ? UiWeatherTypes.SNOWY
        : UiWeatherTypes.RAINY;
    }
    if (this.isWinter(weatherDay)) {
      return UiWeatherTypes.SNOWY;
    }

    if (this.isSummer(weatherDay)) {
      return UiWeatherTypes.SUNNY;
    }

    return UiWeatherTypes.DEFAULT;
  }

  private isWinter(weatherDay: WeatherDay): boolean {
    return weatherDay['Temp. A.'] < 2;
  }

  private isSummer(weatherDay: WeatherDay): boolean {
    return !this.isWinter(weatherDay) && !!this.isHot(weatherDay);
  }

  private isRaining(weatherDay: WeatherDay): boolean {
    return weatherDay.Regen > 0.3;
  }

  private isHot(weatherDay: WeatherDay): boolean {
    return weatherDay['Temp. A.'] > 20;
  }
}
