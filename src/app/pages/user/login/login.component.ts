import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    @ViewChild("loginForm") form: NgForm;
    errorMessage: string;

    constructor(private authService: AuthService) { }

    async onSubmit() {
        this.errorMessage = undefined;
        await this.authService.signIn(this.form.value.email, this.form.value.password)
            .then(response => {
                if(response === "auth/user-not-found") {
                    this.errorMessage = "Email Id does not Exists";
                } else if(response === "auth/wrong-password") {
                    this.errorMessage = "Incorrect Password"
                } else if(response === "auth/invalid-email") {
                    this.errorMessage = "Invalid Email Id";
                } else {
                    this.errorMessage = "Some unknown Error Occured";
                }
            });
    }
}