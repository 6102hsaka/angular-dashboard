import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    
    savedUsers: User[];

    currentlyLoggedInUser = new Subject<User>();

    constructor(private router: Router) { 
        this.savedUsers = [
            { id: "1", email: "akash", password: "password" },
            { id: "2", email: "samir", password: "password" },
            { id: "3", email: "aadityash", password: "password" },
            { id: "4", email: "atharv", password: "password" }
        ];
    }

    signUp(email: string, password: string) {
        const len = this.savedUsers.length;
        const newUser = new User(len+"", email, password);
        this.currentlyLoggedInUser.next(newUser);
    }

    signIn(email: string, password: string) {
        const filteredData = this.savedUsers.filter(user => user.email===email && user.password===password);
        if(filteredData.length===1) {
            this.currentlyLoggedInUser.next(filteredData[0]);
        } else {
            this.currentlyLoggedInUser.next(null);
        }
    }

    logout() {
      this.currentlyLoggedInUser.next(null);
      this.router.navigate(["/auth","login"]);
    }
}