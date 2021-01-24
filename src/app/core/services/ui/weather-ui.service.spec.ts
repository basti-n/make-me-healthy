import { WeatherDay } from 'app/core/models/dtos';
import { WeatherUiService } from './weather-ui.service';

const getWeatherDay = (update: Partial<WeatherDay>): WeatherDay => {
  return {
    Datum: '01.01.2016',
    Zeit: '00:00',
    'Temp. A.': 1.6,
    'Temp. 3': -38.8,
    'Feuchte A.': 94,
    Luftdruck: 977,
    Regen: 0,
    Wind: 5,
    Richtung: 150,
    Helligkeit: 0,
    ...update,
  };
};

describe('WeatherUiService', () => {
  let service: WeatherUiService;

  beforeEach(() => {
    service = new WeatherUiService();
  });

  it('should be created', () => {
    expect(service instanceof WeatherUiService).toBeTruthy();
  });

  describe('getIcon', () => {
    it('should provide the path to the sunny Icon', () => {
      const weatherDay = getWeatherDay({ Regen: 0, 'Temp. A.': 30 });
      const result = service.getIcon(weatherDay);

      expect(result).toContain('sunny');
    });
    it('should provide the path to the rainy Icon', () => {
      const weatherDay = getWeatherDay({ Regen: 3, 'Temp. A.': 15 });
      const result = service.getIcon(weatherDay);

      expect(result).toContain('rain');
    });

    it('should provide the path to the snowy Icon', () => {
      const weatherDay = getWeatherDay({ 'Temp. A.': -5 });
      const result = service.getIcon(weatherDay);

      expect(result).toContain('snow');
    });

    it('should provide the path to the default Icon', () => {
      const weatherDay = getWeatherDay({ 'Temp. A.': 10, Regen: 0 });
      const result = service.getIcon(weatherDay);

      expect(result).toContain('cloud');
    });
  });
});
