import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { ExactDateDataService } from "src/app/core/http/exact-date-data.service";
import { TimeseriesService } from "src/app/core/http/timeseries-data.service";


@Injectable({
    providedIn: 'root'
})
export class ChartService {

    STATE_NAMES = {
        AP: 'Andhra Pradesh',
        AR: 'Arunachal Pradesh',
        AS: 'Assam',
        BR: 'Bihar',
        CT: 'Chhattisgarh',
        GA: 'Goa',
        GJ: 'Gujarat',
        HR: 'Haryana',
        HP: 'Himachal Pradesh',
        JH: 'Jharkhand',
        KA: 'Karnataka',
        KL: 'Kerala',
        MP: 'Madhya Pradesh',
        MH: 'Maharashtra',
        MN: 'Manipur',
        ML: 'Meghalaya',
        MZ: 'Mizoram',
        NL: 'Nagaland',
        OR: 'Odisha',
        PB: 'Punjab',
        RJ: 'Rajasthan',
        SK: 'Sikkim',
        TN: 'Tamil Nadu',
        TG: 'Telangana',
        TR: 'Tripura',
        UT: 'Uttarakhand',
        UP: 'Uttar Pradesh',
        WB: 'West Bengal',
        AN: 'Andaman and Nicobar Islands',
        CH: 'Chandigarh',
        DN: 'Dadra and Nagar Haveli and Daman and Diu',
        DL: 'Delhi',
        JK: 'Jammu and Kashmir',
        LA: 'Ladakh',
        LD: 'Lakshadweep',
        PY: 'Puducherry',
        TT: 'India',
        UN: 'Unassigned',
    };

    constructor(private timeseriesService: TimeseriesService, 
        private exactDateService: ExactDateDataService) { }

    fetch() {
        this.timeseriesService.fetch();
    }

    getTimeSeriesDataForIndividual(state:string = "TT", type: string = "confirmed") {
        return this.timeseriesService.fetchedData.pipe(
            map(response => {
                const data = Object.entries(response[state].dates);
                const result = []
                data.forEach( item => {
                    if(item.length===2 && item[1] && item[1]['total'] && item[1]['total'][type]) {
                        result.push([Date.parse(item[0]), item[1]['total'][type]])
                    } else {
                        result.push([Date.parse(item[0]), 0])
                    }
                });
                return result;
            })
        )
    }

    getCasesCountForEveryState(type: string = "confirmed") {
        return this.exactDateService.fetchedData.pipe(
            map(data => {
                const response = []
                for(let key in data) {
                    if(key!=="TT" && key!=="UN") {
                        response.push([this.STATE_NAMES[key], data[key]['total'][type]])
                    }
                }
                return response;
            })
        )
    }
}