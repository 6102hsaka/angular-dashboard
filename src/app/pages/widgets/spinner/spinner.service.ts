import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    public showSpinner: Subject<boolean>;

    constructor() {
        this.showSpinner = new Subject<boolean>();
    }

    show() {
        this.showSpinner.next(true);
        console.log("show"); 
    }

    hide() {
        this.showSpinner.next(false);
        console.log("hide");
    }
}