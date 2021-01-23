import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WidgetModule } from 'app/components/widget';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, WidgetModule],
  exports: [DashboardComponent],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
