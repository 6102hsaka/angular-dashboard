import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { MainModule } from './pages/main/main.module';
import { SharedModule } from './pages/shared/shared.module';
import { UserModule } from './pages/user/user.module';
import { HttpInterceptorService } from './core/http/http-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    AppRoutingModule,
    MainModule,
    SharedModule,
    UserModule,
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
