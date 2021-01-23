import { Directive, ElementRef, HostListener, Input } from '@angular/core';

const DEFAULT_IMAGE =
  'https://smig.bitmi.de/media/img/logos/Logo_red_medical_neu_260x200.png';

@Directive({ selector: '[appImageFallback]' })
export class ImageFallbackDirective {
  @Input() appImageFallback?: string = DEFAULT_IMAGE;

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
