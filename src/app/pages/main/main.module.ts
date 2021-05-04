import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderCardComponent } from './dashboard/header-card/header-card.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { ProfileComponent } from './profile/profile.component';
import { RankTableComponent } from './dashboard/rank-table/rank-table.component';
import { TimeseriesChartComponent } from './dashboard/timeseries-chart/timeseries-chart.component';
import { PieChartComponent } from './dashboard/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderCardComponent,
    HomeComponent,
    ProfileComponent,
    RankTableComponent,
    TimeseriesChartComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    DashboardComponent,
    HomeComponent,
    ProfileComponent
  ]
})
export class MainModule { }