import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WidgetItem } from 'app/core/models/definitions';
import { WidgetBulletsComponent } from './widget-bullets.component';

const mockBullets: WidgetItem['bullets'] = [
  {
    value: 'Unit',
    label: 'Test',
  },
  { value: 'Red', label: 'Medical' },
  { value: 'Stay', label: 'Healthy' },
];

describe('WidgetBulletsComponent', () => {
  let component: WidgetBulletsComponent;
  let fixture: ComponentFixture<WidgetBulletsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetBulletsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetBulletsComponent);
    component = fixture.componentInstance;
    component.bullets = mockBullets;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render label and value for each bullet', () => {
    const bullets: HTMLDListElement[] = fixture.debugElement
      .queryAll(By.css('li'))
      .map((debugElement) => debugElement.nativeElement);

    expect(
      component.bullets.every((bullet) =>
        bullets.find(
          (li) =>
            li.textContent.includes(String(bullet.value)) &&
            li.textContent.includes(bullet.label)
        )
      )
    ).toBeTruthy();
  });
});
