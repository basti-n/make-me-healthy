import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UnixTimeToDatetimePipe } from './unix-time-to-datetime.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [UnixTimeToDatetimePipe],
  declarations: [UnixTimeToDatetimePipe],
  providers: [],
})
export class PipesModule {}
