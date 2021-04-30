import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './pages/main/dashboard/dashboard.component';
import { HomeComponent } from './pages/main/home/home.component';
import { ProfileComponent } from './pages/main/profile/profile.component';

import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
    { 
        path: 'auth', 
        children: [
            { path: 'login', component: LoginComponent }, 
            { path: 'register', component: RegisterComponent }
        ]
    },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
