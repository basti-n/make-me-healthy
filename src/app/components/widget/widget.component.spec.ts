import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectivesModule } from 'app/core/directives';
import { of } from 'rxjs';
import { WidgetDataFacade } from './widget-data.facade';
import { WidgetComponent } from './widget.component';

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesModule],
      providers: [
        {
          provide: WidgetDataFacade,
          useValue: { getData$: () => of([]) },
        },
      ],
      declarations: [WidgetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
