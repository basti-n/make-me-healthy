import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectivesModule } from 'app/core/directives';
import { WidgetBulletsComponent } from './widget-item/widget-bullets/widget-bullets.component';
import { WidgetDataFacade } from './widget-data.facade';
import { WidgetItemComponent } from './widget-item';
import { WidgetItemHeadingComponent } from './widget-item/widget-item-heading';
import { WidgetComponent } from './widget.component';
import { PipesModule } from 'app/core/pipes';

@NgModule({
  imports: [CommonModule, DirectivesModule, PipesModule],
  exports: [
    WidgetComponent,
    WidgetItemComponent,
    WidgetBulletsComponent,
    WidgetItemHeadingComponent,
  ],
  declarations: [
    WidgetComponent,
    WidgetItemComponent,
    WidgetBulletsComponent,
    WidgetItemHeadingComponent,
  ],
  providers: [WidgetDataFacade],
})
export class WidgetModule {}
