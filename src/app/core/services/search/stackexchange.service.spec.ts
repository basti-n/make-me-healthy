import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StackExchangeSearchService } from './stackexchange.service';

describe('StackExchangeSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StackExchangeSearchService],
    });
  });

  it('should ...', inject(
    [StackExchangeSearchService],
    (service: StackExchangeSearchService) => {
      expect(service).toBeTruthy();
    }
  ));
});
