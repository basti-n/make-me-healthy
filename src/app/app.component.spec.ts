import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchComponent } from './pages/search/search.component';
import { AppRoutingModule } from './app.routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StackExchangeSearchService } from './core/services/search';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [LayoutModule, AppRoutingModule, HttpClientModule],
        declarations: [AppComponent, DashboardComponent, SearchComponent],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }, StackExchangeSearchService],
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
    })
  );

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
