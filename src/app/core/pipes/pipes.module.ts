import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { UnixTimeToDatetimePipe } from './unix-time-to-datetime.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [UnixTimeToDatetimePipe, SanitizeHtmlPipe],
  declarations: [UnixTimeToDatetimePipe, SanitizeHtmlPipe],
  providers: [],
})
export class PipesModule {}
