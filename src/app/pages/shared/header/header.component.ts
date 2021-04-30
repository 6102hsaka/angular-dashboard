import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    @Output() sidebarToogleEvent: EventEmitter<any> = new EventEmitter();
  
    private userSubscription: Subscription;
    public currentUser: User;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.userSubscription = this.authService.currentlyLoggedInUser.subscribe(
            user => {
                this.currentUser = user; 
            }
        );
    }

    onMenuIconClick = () => this.sidebarToogleEvent.emit();
    
    logout = () => this.authService.logout();

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }

}