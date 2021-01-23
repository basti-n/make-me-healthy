import { Component, Input } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WidgetComponent } from 'app/components/widget';
import { WidgetConfig } from 'app/core/models/definitions/widget.config';
import { DashboardComponent } from './dashboard.component';

@Component({
  selector: 'app-widget',
  template: `<div>{{ config.mode }}</div>`,
})
class MockWidgetComponent {
  @Input() config: WidgetConfig;
}

const mockWidgetConfig = { mode: 'mixed' } as WidgetConfig;

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DashboardComponent, MockWidgetComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    component.widgetConfig = mockWidgetConfig;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide the config to the widget', () => {
    const widget = fixture.debugElement.query(By.directive(MockWidgetComponent));

    expect(widget.componentInstance.config).toBe(mockWidgetConfig);
  });
});
