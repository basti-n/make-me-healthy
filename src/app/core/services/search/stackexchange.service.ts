import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StackexchangeSearchDTO } from '../../models/dtos';
import { SearchService } from 'app/core/models/base';

const STACKEXCHANGE_URL =
  'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=';

@Injectable({ providedIn: 'root' })
export class StackExchangeSearchService extends SearchService<StackexchangeSearchDTO> {
  private static readonly apiUrl = STACKEXCHANGE_URL;
  protected readonly cache = new Map<string, StackexchangeSearchDTO>();

  constructor(private http: HttpClient) {
    super();
  }

  isSearchRequest(url: string): boolean {
    const identifiers = ['api.stackexchange', 'search'];
    return identifiers.every((identifier) => url.includes(identifier));
  }

  search(keyword: string): Observable<StackexchangeSearchDTO> {
    if (this.isCached(keyword)) {
      return of(this.getFromFromCache(keyword));
    }

    return this.http.get<StackexchangeSearchDTO>(this.getUrl(keyword)).pipe(
      tap((result) => {
        this.saveToCache(keyword, result);
        this.logUsage(result);
      }),
      catchError((err: Error) => of({ items: [] } as StackexchangeSearchDTO))
    );
  }

  private logUsage(result: StackexchangeSearchDTO): void {
    console.log(
      'API USAGE: ' +
        result.quota_remaining +
        ' of ' +
        result.quota_max +
        ' requests available'
    );
  }

  private saveToCache(keyword: string, result: StackexchangeSearchDTO): void {
    this.cache.set(keyword, result);
  }

  private isCached(keyword: string): boolean {
    return this.cache.has(keyword);
  }

  private getFromFromCache(keyword: string): StackexchangeSearchDTO | null {
    return this.cache.get(keyword);
  }

  private getUrl(keyword: string): string {
    return StackExchangeSearchService.apiUrl + encodeURIComponent(keyword);
  }
}
