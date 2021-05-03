import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderCardComponent } from './header-card/header-card.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { MaterialModule } from './material.module';
import { RankTableComponent } from './rank-table/rank-table.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    HeaderCardComponent,
    ErrorAlertComponent,
    RankTableComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderCardComponent,
    ErrorAlertComponent,
    RankTableComponent,
    SpinnerComponent,
  ]
})
export class WidgetsModule { }
