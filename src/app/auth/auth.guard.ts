import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

import { AuthService } from "./auth.service";
import { User } from "./user.model";


@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    private currentUser: User;

    constructor(private authService: AuthService, private router: Router) {
        this.authService.currentlyLoggedInUser.subscribe(user => {
            this.currentUser = user
        });
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): boolean | UrlTree {
            if(this.currentUser) {
                return true;
            }
            return this.router.createUrlTree(['/auth', 'login']);
    }
}