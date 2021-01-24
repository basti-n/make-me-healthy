import { take } from 'rxjs/operators';
import { WeatherSearchService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherSearchService;

  beforeEach(() => {
    service = new WeatherSearchService();
  });

  it('should be created', () => {
    expect(service instanceof WeatherSearchService).toBeTruthy();
  });

  describe('search', () => {
    it('should return the weatherdata', async () => {
      const result = await service.search().pipe(take(1)).toPromise();
      expect(result.days.length).toBeGreaterThan(1);
    });
  });
});
