import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ChartContainerComponent } from './dashboard/chart-container/chart-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderCardComponent } from './dashboard/header-card/header-card.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { PieChartComponent } from './dashboard/chart-container/pie-chart/pie-chart.component';
import { ProfileComponent } from './profile/profile.component';
import { RankTableComponent } from './dashboard/rank-table/rank-table.component';
import { TimeseriesChartComponent } from './dashboard/chart-container/timeseries-chart/timeseries-chart.component';


@NgModule({
  declarations: [
    ChartContainerComponent,
    DashboardComponent,
    HeaderCardComponent,
    HomeComponent,
    PieChartComponent,
    ProfileComponent,
    RankTableComponent,
    TimeseriesChartComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgApexchartsModule,
  ],
  exports: [
    DashboardComponent,
    HomeComponent,
    ProfileComponent
  ]
})
export class MainModule { }