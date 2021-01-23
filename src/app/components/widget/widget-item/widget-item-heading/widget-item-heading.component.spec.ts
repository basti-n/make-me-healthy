import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanitizeHtmlPipe } from 'app/core/pipes/sanitize-html.pipe';

import { WidgetItemHeadingComponent } from './widget-item-heading.component';

describe('WidgetItemHeadingComponent', () => {
  let component: WidgetItemHeadingComponent;
  let fixture: ComponentFixture<WidgetItemHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetItemHeadingComponent, SanitizeHtmlPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetItemHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
