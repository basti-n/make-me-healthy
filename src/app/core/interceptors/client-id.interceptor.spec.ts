import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientIdInterceptor } from './client-id.interceptor';
import { take } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { StackExchangeSearchService } from '../services/search/stackexchange.service';

@Injectable()
export class MockOtherService {
  API_URL = 'http://unit.test/user';
  constructor(private http: HttpClient) {}

  search(): Observable<unknown> {
    return this.http.get<unknown>(this.API_URL);
  }
}

describe('ClientIdInterceptor', () => {
  let httpMock: HttpTestingController;
  let searchService: StackExchangeSearchService;
  let otherService: { search: () => Observable<unknown> };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StackExchangeSearchService,
        MockOtherService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ClientIdInterceptor,
          multi: true,
        },
      ],
    });

    searchService = TestBed.inject(StackExchangeSearchService);
    httpMock = TestBed.inject(HttpTestingController);
    otherService = TestBed.inject(MockOtherService);
  });
  it('should the clientId for search requests', async () => {
    const queryString = 'randomSearchQuery';
    searchService.search(queryString).pipe(take(1)).subscribe();

    const request = httpMock.expectOne(
      `${StackExchangeSearchService['apiUrl']}${queryString}&key=${environment.clientId}`
    );
    expect(request.request.params.get('key')).toBeTruthy();
  });

  it('should not add a clientId param for search requests', () => {
    otherService.search().subscribe();

    const request = httpMock.expectOne('http://unit.test/user');
    expect(request.request.params.get('key')).toBeFalsy();
  });
});
