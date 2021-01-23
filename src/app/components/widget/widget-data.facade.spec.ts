import { TestBed, waitForAsync } from '@angular/core/testing';
import { WidgetConfig } from 'app/core/models/definitions/widget.config';
import {
  StackExchangeSearchService,
  WeatherSearchService,
} from 'app/core/services/search';
import { of } from 'rxjs';
import { WidgetDataFacade } from './widget-data.facade';

const getSearchServiceMock = () => ({ search: () => of({}) });

describe('WidgetDataFacade', () => {
  let facade: WidgetDataFacade;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          WidgetDataFacade,
          {
            provide: WeatherSearchService,
            useValue: getSearchServiceMock(),
          },
          {
            provide: StackExchangeSearchService,
            useValue: getSearchServiceMock(),
          },
        ],
      });
      facade = TestBed.inject(WidgetDataFacade);
    })
  );

  it('should be created', () => {
    expect(facade instanceof WidgetDataFacade).toBeTruthy();
  });

  describe('getData$', () => {
    const baseConfig: Partial<WidgetConfig> = { itemSize: 10 };

    beforeEach(() => {
      spyOn(facade['WeatherSearchService'], 'search').and.callThrough();
      spyOn(facade['stackExchangeService'], 'search').and.callThrough();
    });

    it('should call the WeatherSearchService in weather mode', () => {
      const configInWeatherMode = {
        ...baseConfig,
        mode: 'weather',
      } as WidgetConfig;
      facade.getData$(configInWeatherMode);

      expect(facade['WeatherSearchService'].search).toHaveBeenCalled();
      expect(facade['stackExchangeService'].search).not.toHaveBeenCalled();
    });
    it('should call the StackExchangeSearchService in stackoverflow mode', () => {
      const configInStackoverflowMode = {
        ...baseConfig,
        mode: 'stackoverflow',
      } as WidgetConfig;
      facade.getData$(configInStackoverflowMode);

      expect(facade['stackExchangeService'].search).toHaveBeenCalled();
      expect(facade['WeatherSearchService'].search).not.toHaveBeenCalled();
    });

    it('should call the both services in mixed mode ', () => {
      const configInStackoverflowMode = {
        ...baseConfig,
        mode: 'mixed',
      } as WidgetConfig;
      facade.getData$(configInStackoverflowMode);

      expect(facade['WeatherSearchService'].search).toHaveBeenCalled();
      expect(facade['stackExchangeService'].search).toHaveBeenCalled();
    });
  });
});
