import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

    private userSubscription: Subscription;
    public currentUser: User;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.userSubscription = this.authService.currentlyLoggedInUser.subscribe(
            user => {
                this.currentUser = user;
            }
        )
    }

    onLogout = () => this.authService.logout();

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

}
