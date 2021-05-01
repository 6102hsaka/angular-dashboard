import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    ErrorAlertComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ErrorAlertComponent,
    SpinnerComponent
  ]
})
export class WidgetsModule { }
