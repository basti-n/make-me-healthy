import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetComponent } from 'app/components/widget';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'angular',
      },
      {
        path: 'angular',
        component: WidgetComponent,
        data: { animations: 'angular' },
      },
      {
        path: 'typescript',
        component: WidgetComponent,
        data: { animations: 'typescript' },
      },
      {
        path: 'weather',
        component: WidgetComponent,
        data: { animations: 'weather' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
