import { Component, Inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import firebase from 'firebase/app';

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {

    @ViewChild('profileUpdateForm') profileUpdateForm: NgForm;

    constructor(public dialogRef: MatDialogRef<ProfileFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data) { }

    async onSubmit() {
        (await firebase.auth().currentUser)
            .updateProfile({
                displayName: this.profileUpdateForm.value.displayName
            })
            .then(() => console.log("profile updated"))
            .catch(error => console.log(error))
        this.dialogRef.close();
    }
}
