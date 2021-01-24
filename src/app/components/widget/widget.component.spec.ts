import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DirectivesModule } from 'app/core/directives';
import { WidgetConfig, WidgetItem } from 'app/core/models/definitions';
import { of } from 'rxjs';
import { WidgetDataFacade } from './widget-data.facade';
import { WidgetItemComponent } from './widget-item';
import { WidgetComponent } from './widget.component';
import { WidgetModule } from './widget.module';

const mockWidgetConfig: WidgetConfig = { itemSize: 10 } as WidgetConfig;

const mockWidgetItems: WidgetItem[] = [{}, {}] as WidgetItem[];

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [DirectivesModule, WidgetModule],
        providers: [
          {
            provide: WidgetDataFacade,
            useValue: { getData$: () => of(mockWidgetItems) },
          },
          {
            provide: Location,
            useValue: { getState: () => mockWidgetConfig },
          },
        ],
        declarations: [WidgetComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get the widget config from the router state', () => {
    spyOn(component['location'], 'getState').and.returnValue(mockWidgetConfig);
    spyOn(component, 'getData$').and.callThrough();

    component.ngOnInit();

    expect(component.getData$).toHaveBeenCalledWith(mockWidgetConfig);
  });

  it('should render a widget for each widgetItem', () => {
    fixture.detectChanges();
    const widgetItems = fixture.debugElement.queryAll(
      By.directive(WidgetItemComponent)
    );

    expect(widgetItems.length).toBe(mockWidgetItems.length);
  });
});
