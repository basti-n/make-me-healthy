import { Injectable } from '@angular/core';
import { SearchService } from 'app/core/models/base';
import { WeatherDTO } from 'app/core/models/dtos';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import weather from './weatherdata.json';

@Injectable({ providedIn: 'root' })
export class WeatherService extends SearchService<WeatherDTO> {
  private readonly data: WeatherDTO;

  constructor() {
    super();
    this.data = { days: weather };
  }

  search(queryString: string): Observable<WeatherDTO> {
    const matchingDays = this.data?.days?.filter((weatherDay) =>
      weatherDay.Datum.includes(queryString)
    );
    return of({ days: matchingDays } as WeatherDTO);
  }
}
