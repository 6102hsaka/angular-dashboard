import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SpinnerService } from './pages/shared/spinner/spinner.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'angular-dashboard';
    isSpinnerVisible = false;
    spinnerSubscription: Subscription;

    constructor(private spinnerService: SpinnerService) { }

    ngOnInit(): void { 
        this.spinnerSubscription = this.spinnerService.showSpinner.subscribe(
            res => {
                this.isSpinnerVisible = res!==0;
            }
        )
    }

    ngOnDestroy(): void { 
        this.spinnerSubscription.unsubscribe();
    }
}