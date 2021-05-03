import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class TimeseriesService {

    fetchedData: Subject<any>;

    constructor(private http: HttpClient) {
        this.fetchedData = new Subject<any>();
    }

    fetch() {
        const url = `${environment.url.covid}/timeseries.min.json`;
        this.http.get(url)
            .subscribe(response => {
                this.fetchedData.next(response);
            });
    }
}