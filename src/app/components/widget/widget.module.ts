import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from 'app/core/directives';
import { WidgetBulletsComponent } from './widget-bullets/widget-bullets.component';
import { WidgetDataFacade } from './widget-data.facade';
import { WidgetItemComponent } from './widget-item';
import { WidgetComponent } from './widget.component';

@NgModule({
  imports: [CommonModule, DirectivesModule],
  exports: [WidgetComponent, WidgetItemComponent, WidgetBulletsComponent],
  declarations: [WidgetComponent, WidgetItemComponent, WidgetBulletsComponent],
  providers: [WidgetDataFacade],
})
export class WidgetModule {}
