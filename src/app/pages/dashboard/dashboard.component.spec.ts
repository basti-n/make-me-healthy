import { DebugElement } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app.routing.module';
import { DashboardComponent } from './dashboard.component';
import { Router, RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: Router;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [AppRoutingModule, RouterTestingModule.withRoutes([])],
        declarations: [DashboardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
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

  it('should link to the correct url', () => {
    const routerlinks = fixture.debugElement.queryAll(By.directive(RouterLink));
    expect(routerlinks[0].attributes['ng-reflect-router-link']).toContain(
      component.widgetConfigs[0].route
    );
  });

  it('should should navigate when clicking a routerlink', fakeAsync(() => {
    spyOn(router, 'navigateByUrl').and.callFake(() => Promise.resolve(true));
    const routerlinks = fixture.debugElement.queryAll(By.directive(RouterLink));

    routerlinks[1].triggerEventHandler('click', {});
    tick();

    expect(router.navigateByUrl).toHaveBeenCalled();
  }));
});
