import { TestBed, waitForAsync } from '@angular/core/testing';
import { StackExchangeSearchService } from './stackexchange.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { StackexchangeSearchDTO } from 'app/core/models/dtos';
import { take } from 'rxjs/operators';

describe('StackExchangeSearchService', () => {
  let service: StackExchangeSearchService;
  let httpMock: HttpTestingController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [StackExchangeSearchService],
      });

      service = TestBed.inject(StackExchangeSearchService);
      httpMock = TestBed.inject(HttpTestingController);
    })
  );

  afterEach(() => {
    service['cache'].clear();
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search', () => {
    const queryString = 'unit test';
    it('should make a request if no cached result exists', () => {
      service.search(queryString).subscribe();

      const req = httpMock.expectOne(service['getUrl'](queryString));

      expect(req.request.method).toBe('GET');
    });
    it('should get the result from cached if cached', async () => {
      const mockResult = {} as StackexchangeSearchDTO;
      service['saveToCache'](queryString, mockResult);

      const result = await service
        .search(queryString)
        .pipe(take(1))
        .toPromise();

      httpMock.expectNone(StackExchangeSearchService['apiUrl']);
      expect(result).toEqual(mockResult);
    });
  });
});
