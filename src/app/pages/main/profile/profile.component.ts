import { AngularFireAuth } from '@angular/fire/auth';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { ProfileFormComponent } from './profile-form/profile-form.component';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

    public displayName: string;
    public email: string;
    public uid: string;

    private dialogRefSubscription: Subscription;
    private userSubscription: Subscription;

    constructor(private firebaseAuth: AngularFireAuth, private dialog: MatDialog,
        @Inject(DOCUMENT) private document: Document) { }

    ngOnInit(): void {
        this.userSubscription = this.firebaseAuth.authState.subscribe(
            user => {
                this.displayName = user.displayName;
                this.email = user.email;
                this.uid = user.uid;
            }
        )
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ProfileFormComponent, {
            width: '250px',
            data: { displayName: this.displayName }
        });

        this.dialogRefSubscription = dialogRef.afterClosed().subscribe(() => {
            this.document.location.reload();
        })
    }

    ngOnDestroy(): void {
        if(this.dialogRefSubscription) {
            this.dialogRefSubscription.unsubscribe();
        }
        this.userSubscription.unsubscribe();
    }
}