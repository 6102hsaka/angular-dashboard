import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    ErrorAlertComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ], 
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }