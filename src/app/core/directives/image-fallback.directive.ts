import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appImageFallback]' })
export class ImageFallbackDirective {
  @Input() appImageFallback: string;

  @HostListener('error') attachFallback() {
    if (this.nativeElement) {
      this.nativeElement.src = this.appImageFallback;
    }
  }

  constructor(private readonly elementRef: ElementRef) {}

  get nativeElement(): HTMLImageElement | null {
    return this.elementRef?.nativeElement;
  }
}
