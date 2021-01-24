import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SanitizeHtmlPipe } from 'app/core/pipes/sanitize-html.pipe';

import { WidgetItemHeadingComponent } from './widget-item-heading.component';

describe('WidgetItemHeadingComponent', () => {
  let component: WidgetItemHeadingComponent;
  let fixture: ComponentFixture<WidgetItemHeadingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetItemHeadingComponent, SanitizeHtmlPipe],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetItemHeadingComponent);
    component = fixture.componentInstance;
    component.imageUrl = 'https://www.w3.org/Graphics/PNG/text2.png';
    component.headline = 'Typescript: Argument of type &#39;string';

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the headline', () => {
    const headline = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(headline.textContent).toContain('Typescript');
  });
  it('should render the image', () => {
    const image = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(image.src).toBe(component.imageUrl);
  });
});
