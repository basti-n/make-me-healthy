import { TestBed, waitForAsync } from '@angular/core/testing';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

class MockSanitizer {
  sanitize(str: string): SafeHtml {
    return str;
  }
}
describe('SanitizeHtml', () => {
  let pipe: SanitizeHtmlPipe;
  let sanitizer: DomSanitizer;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [{ provide: DomSanitizer, useClass: MockSanitizer }, SanitizeHtmlPipe],
      });
      pipe = TestBed.inject(SanitizeHtmlPipe);
      sanitizer = TestBed.inject(DomSanitizer);
    })
  );

  it('should call sanitize and return its result', () => {
    spyOn(sanitizer, 'sanitize').and.callThrough();

    const testHtml = `<h1>Hello World</h1>`;
    const result = pipe.transform(testHtml);

    expect(result).toEqual(result);
    expect(sanitizer.sanitize).toHaveBeenCalled();
  });
});
