import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.firebaseAuth.authState.pipe(
            take(1),
            map(user => {
                return user ? true : this.router.createUrlTree(['/auth', 'login']);
            })
        );
    }
}