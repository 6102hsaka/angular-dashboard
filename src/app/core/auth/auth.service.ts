import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

    constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

    async signUp(email: string, password: string): Promise<string> {
        let errorDesc: string;
        await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(["/home"]);
            }).catch(error => {
                errorDesc = error.code;
            });
        return errorDesc;  
    }

    async signIn(email: string, password: string): Promise<string> {
        let errorDesc: string;
        await this.firebaseAuth.signInWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(["/home"]);
            }).catch(error => {
                errorDesc = error.code;
            });
        return errorDesc;
    }

    logout() {
        this.firebaseAuth.signOut();
        this.router.navigate(["/auth","login"]);
    }
}