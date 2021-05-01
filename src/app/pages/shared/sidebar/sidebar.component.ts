import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import firebase from 'firebase/app';

import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

    public currentUser: firebase.User;
    private userSubscription: Subscription;

    constructor(private firebaseAuth: AngularFireAuth, private authService: AuthService) { }

    ngOnInit(): void {
        this.userSubscription = this.firebaseAuth.authState.subscribe(user => {
            this.currentUser = user;
        });
    }

    onLogout = () => this.authService.logout();

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }
}
