import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { ProfileComponent } from './profile/profile.component';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WidgetsModule,
  ],
  exports: [
    DashboardComponent,
    HomeComponent,
    ProfileComponent
  ]
})
export class MainModule { }