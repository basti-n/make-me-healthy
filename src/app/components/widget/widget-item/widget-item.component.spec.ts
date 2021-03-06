import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WidgetModule } from '../widget.module';
import { WidgetBulletsComponent } from './widget-bullets/widget-bullets.component';
import { WidgetItemHeadingComponent } from './widget-item-heading';
import { WidgetItemComponent } from './widget-item.component';

describe('WidgetItemComponent', () => {
  let component: WidgetItemComponent;
  let fixture: ComponentFixture<WidgetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the heading', () => {
    const heading = fixture.debugElement.query(
      By.directive(WidgetItemHeadingComponent)
    );
    expect(heading).toBeTruthy();
  });
  it('should render the bullets', () => {
    const bullets = fixture.debugElement.query(
      By.directive(WidgetBulletsComponent)
    );
    expect(bullets).toBeTruthy();
  });
});
