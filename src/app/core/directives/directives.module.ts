import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageFallbackDirective } from './image-fallback.directive';

@NgModule({
  imports: [CommonModule],
  exports: [ImageFallbackDirective],
  declarations: [ImageFallbackDirective],
  providers: [],
})
export class DirectivesModule {}
