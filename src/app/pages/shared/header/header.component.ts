import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import firebase from 'firebase/app';

import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    @Output() sidebarToogleEvent: EventEmitter<any> = new EventEmitter();
  
    public currentUser: firebase.User;
    private userSubscription: Subscription;

    constructor(private firebaseAuth: AngularFireAuth, private authService: AuthService) {}

    ngOnInit(): void {
        this.userSubscription = this.firebaseAuth.authState.subscribe(user => {
            this.currentUser = user;
        });
    }

    onMenuIconClick = () => this.sidebarToogleEvent.emit();
    
    onLogout = () => this.authService.logout();

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }
}