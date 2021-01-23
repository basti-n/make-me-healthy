import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WidgetDataFacade } from './widget-data.facade';
import { WidgetComponent } from './widget.component';

@NgModule({
  imports: [CommonModule],
  exports: [WidgetComponent],
  declarations: [WidgetComponent],
  providers: [WidgetDataFacade],
})
export class WidgetModule {}
