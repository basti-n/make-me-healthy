import { DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app.routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [AppRoutingModule, DashboardRoutingModule],
        declarations: [DashboardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show a nav link to all widgets from the config', async () => {
    const navigationLinks: DebugElement[] = fixture.debugElement.queryAll(
      By.css('nav > li')
    );
    expect(navigationLinks.length).toEqual(
      Object.keys(component.widgetConfigs).length
    );

    const nativeElements = navigationLinks.map((debug) => debug.nativeElement);

    expect(
      nativeElements.find(
        (el: HTMLElement) => el.textContent === component.widgetConfigs[0].label
      )
    );
  });
});
