import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetModule } from '../widget.module';
import { WidgetItemComponent } from './widget-item.component';

describe('WidgetItemComponent', () => {
  let component: WidgetItemComponent;
  let fixture: ComponentFixture<WidgetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WidgetModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
