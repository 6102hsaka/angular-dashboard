import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { environment } from "src/environments/environment";


@Injectable({
    providedIn: 'root'
})
export class ExactDateDataService {

    fetchedData: Subject<any>;

    constructor(private http: HttpClient) {
        this.fetchedData = new Subject<any>();
    }

    fetch(date?: string) {
        const url = `${environment.url.covid}/data${date ? `-${date}` : ''}.min.json`;
        this.http.get(url)
            .subscribe(response => {
                this.fetchedData.next(response);
            });
    }
}