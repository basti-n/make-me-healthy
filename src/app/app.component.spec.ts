import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from './core/layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app.routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { SearchService } from './core/services/search.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [LayoutModule, AppRoutingModule, HttpClientModule],
        declarations: [AppComponent, DashboardComponent, SearchComponent],
        providers: [{ provide: APP_BASE_HREF, useValue: '/' }, SearchService],
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
    })
  );

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
