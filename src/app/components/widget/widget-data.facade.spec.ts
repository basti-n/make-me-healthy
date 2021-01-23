import { TestBed, waitForAsync } from '@angular/core/testing';
import { WidgetConfig } from 'app/core/models/definitions/widget.config';
import {
  StackExchangeSearchService,
  WeatherService,
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
            provide: WeatherService,
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
      spyOn(facade['weatherService'], 'search').and.callThrough();
      spyOn(facade['stackExchangeService'], 'search').and.callThrough();
    });

    it('should call the weatherService in weather mode', () => {
      const configInWeatherMode = {
        ...baseConfig,
        mode: 'weather',
      } as WidgetConfig;
      facade.getData$(configInWeatherMode);

      expect(facade['weatherService'].search).toHaveBeenCalled();
      expect(facade['stackExchangeService'].search).not.toHaveBeenCalled();
    });
    it('should call the StackExchangeSearchService in stackoverflow mode', () => {
      const configInStackoverflowMode = {
        ...baseConfig,
        mode: 'stackoverflow',
      } as WidgetConfig;
      facade.getData$(configInStackoverflowMode);

      expect(facade['stackExchangeService'].search).toHaveBeenCalled();
      expect(facade['weatherService'].search).not.toHaveBeenCalled();
    });

    it('should call the both services in mixed mode ', () => {
      const configInStackoverflowMode = {
        ...baseConfig,
        mode: 'mixed',
      } as WidgetConfig;
      facade.getData$(configInStackoverflowMode);

      expect(facade['weatherService'].search).toHaveBeenCalled();
      expect(facade['stackExchangeService'].search).toHaveBeenCalled();
    });
  });
});
