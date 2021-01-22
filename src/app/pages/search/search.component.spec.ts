import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchService } from 'app/core/models/base';
import { StackExchangeSearchService } from 'app/core/services/search';
import { of } from 'rxjs';
import { SearchComponent } from './search.component';

class MockSearchService extends SearchService<unknown> {
  search() {
    return of({});
  }
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [SearchComponent],
        providers: [
          { provide: StackExchangeSearchService, useClass: MockSearchService },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
