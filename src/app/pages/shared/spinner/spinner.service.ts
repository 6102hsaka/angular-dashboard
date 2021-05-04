import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    public showSpinner: Subject<number>;
    private requestCount: number = 0;

    constructor() {
        this.showSpinner = new Subject<number>();
    }

    show = () => this.showSpinner.next(++this.requestCount); 

    hide = () => this.showSpinner.next(--this.requestCount);
}