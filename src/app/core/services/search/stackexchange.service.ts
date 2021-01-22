import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StackexchangeSearchDTO } from '../../models/dtos';
import { SearchService } from 'app/core/models/base';

@Injectable({ providedIn: 'root' })
export class StackExchangeSearchService extends SearchService<StackexchangeSearchDTO> {
  private static readonly apiUrl =
    'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=';

  constructor(private http: HttpClient) {
    super();
  }

  isSearchRequest(url: string): boolean {
    const identifiers = ['api.stackexchange', 'search'];
    return identifiers.every((identifier) => url.includes(identifier));
  }

  search(keyword: string): Observable<StackexchangeSearchDTO> {
    return this.http
      .get<StackexchangeSearchDTO>(StackExchangeSearchService.apiUrl + keyword)
      .pipe(
        tap(
          (data) =>
            console.log(
              'API USAGE: ' +
                data.quota_remaining +
                ' of ' +
                data.quota_max +
                ' requests available'
            ),
          catchError((err: Error) => of(err))
        )
      );
  }
}
