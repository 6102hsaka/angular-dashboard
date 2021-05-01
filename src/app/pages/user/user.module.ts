import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    WidgetsModule
  ], 
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
