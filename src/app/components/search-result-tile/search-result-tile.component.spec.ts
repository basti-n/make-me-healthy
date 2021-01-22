import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ImageFallbackDirective } from 'app/core/directives';
import { SearchItemDTO } from 'app/core/models/dtos/stackexchange-search-item.dto';
import { UnixTimeToDatetimePipe } from 'app/core/pipes';
import { SearchResultTileComponent } from './search-result-tile.component';

const mockResult: SearchItemDTO = {
  tags: ['java'],
  owner: {
    reputation: 7,
    user_id: 15007507,
    user_type: 'registered',
    profile_image:
      'https://lh3.googleusercontent.com/a-/AOh14GhMcUwXnE4XrF0dWgLoDdBOnh4K7JVljjRZKqoltA=s96-c=k-s128',
    display_name: 'CRISIS',
    link: 'https://stackoverflow.com/users/15007507/crisis',
  },
  is_answered: false,
  view_count: 43,
  answer_count: 2,
  score: -1,
  last_activity_date: 1611081133,
  creation_date: 1611079036,
  last_edit_date: 1611079726,
  question_id: 65796923,
  content_license: 'CC BY-SA 4.0',
  link: 'https://stackoverflow.com/questions/65796923/creating-a-tester-class',
  title: 'Creating a Tester Class',
} as SearchItemDTO;

describe('SearchResultTileComponent', () => {
  let component: SearchResultTileComponent;
  let fixture: ComponentFixture<SearchResultTileComponent>;

  beforeEach(
    waitForAsync(async () => {
      TestBed.configureTestingModule({
        declarations: [
          SearchResultTileComponent,
          UnixTimeToDatetimePipe,
          ImageFallbackDirective,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTileComponent);
    component = fixture.componentInstance;
    component.result = mockResult;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
