import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImageFallbackDirective } from './image-fallback.directive';

@Component({
  template: `<img [src]="failingUrl" />`,
})
class MockComponent {
  failingUrl = 'not-found.com/random123.jpg';
  constructor() {}
}

describe('ImageFallbackPipe', () => {
  let fixture: ComponentFixture<MockComponent>;
  let component: MockComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ImageFallbackDirective, MockComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(MockComponent);
      component = fixture.debugElement.componentInstance;
    })
  );

  it('should replace the image', () => {
    fixture.detectChanges();

    const image = fixture.debugElement.query(By.css('img'));
    expect(image.nativeElement.src).toEqual(
      window.origin + '/' + component.failingUrl
    );
  });

  it('should not attach the fallback if the image is succesfully loaded', () => {
    const validImageUrl =
      'https://upload.wikimedia.org/wikipedia/en/9/95/Test_image.jpg';
    component.failingUrl = validImageUrl;

    fixture.detectChanges();

    const image = fixture.debugElement.query(By.css('img'));
    expect(image.nativeElement.src).toEqual(validImageUrl);
  });
});
