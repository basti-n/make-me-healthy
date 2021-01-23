import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBulletsComponent } from './widget-bullets.component';

describe('WidgetBulletsComponent', () => {
  let component: WidgetBulletsComponent;
  let fixture: ComponentFixture<WidgetBulletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetBulletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBulletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
