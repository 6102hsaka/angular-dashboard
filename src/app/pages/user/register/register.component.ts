import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    @ViewChild("registrationForm") form: NgForm;
    errorMessage: string;

    constructor(private authService: AuthService) { }

    async onSubmit() {
        this.errorMessage = undefined;
        await this.authService.signUp(this.form.value.email, this.form.value.password)
            .then(response => {
                if(response === "auth/email-already-in-use") {
                    this.errorMessage = "Email Id Already Exists";
                } else if(response === "auth/invalid-email") {
                    this.errorMessage = "Invalid Email Id";
                } else if(response === "auth/weak-password") {
                    this.errorMessage = "Choose a Strong Password"
                } else {
                    this.errorMessage = "Some unknown Error Occured";
                }
            });
    }
}