import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SpinnerService } from 'src/app/pages/shared/spinner/spinner.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

    constructor(private firebaseAuth: AngularFireAuth, private router: Router,
        private spinnerService: SpinnerService) { }

    async signUp(email: string, password: string): Promise<string> {
        let errorDesc: string;
        this.spinnerService.show();
        await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(["/home"]);
            }).catch(error => {
                errorDesc = error.code;
            });
        this.spinnerService.hide();
        return errorDesc;  
    }

    async signIn(email: string, password: string): Promise<string> {
        let errorDesc: string;
        this.spinnerService.show();
        await this.firebaseAuth.signInWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(["/home"]);
            }).catch(error => {
                errorDesc = error.code;
            });
        this.spinnerService.hide();
        return errorDesc;
    }

    logout() {
        this.firebaseAuth.signOut();
        this.router.navigate(["/auth","login"]);
    }
}