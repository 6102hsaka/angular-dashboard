import { Component, OnInit } from '@angular/core';
import { User } from './auth/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-dashboard';

  loadedUser: User;

  ngOnInit(): void {
    
  }
}
