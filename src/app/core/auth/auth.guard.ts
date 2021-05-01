import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import firebase from 'firebase/app';


@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    private currentUser: firebase.User;

    constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
        this.firebaseAuth.authState.subscribe(user => {
            this.currentUser = user;
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
            if(this.currentUser) {
                return true;
            }
            return this.router.createUrlTree(['/auth', 'login']);
    }
}