import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';

import { ExactDateDataService } from "src/app/core/http/exact-date-data.service";
import { TimeseriesService } from "src/app/core/http/timeseries-data.service";


@Injectable({
    providedIn: 'root'
})
export class DashboardService {

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

    constructor(private exactDateService: ExactDateDataService, 
        private timeseriesService: TimeseriesService) { }

    formatNumber(num: string | number): string {
        if(num===undefined)     
            return " ";
        let x=num.toString();
        let lastThree = x.substring(x.length-3);
        const otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
            lastThree = ',' + lastThree;
        return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    }

    fetch() {
        this.exactDateService.fetch();
        this.timeseriesService.fetch();
        this.getTimeSeriesDataForIndividual();
    }

    getForIndia() {
        return this.exactDateService.fetchedData.pipe(
            map(data => {
                const result = [];
                result.push(
                    { title: 'Confirmed', oneday: data.TT.delta.confirmed, total: data.TT.total.confirmed },
                    { title: 'Recovered', oneday: data.TT.delta.recovered, total: data.TT.total.recovered },
                    { title: 'Deceased', oneday: data.TT.delta.deceased, total: data.TT.total.deceased },
                    { title: 'Vaccinated', total: data.TT.total.vaccinated },
			    );
                result.splice(1, 0, 
                    { title: 'Active', total: (result[0].total - (result[1].total+result[2].total))}
                );
                return [...result];
            })
        )
    };

    getStateListForHighestRecord() {
        return this.exactDateService.fetchedData.pipe(
            map((data: Object) => {
                const stateList = [];
                for(let key in data) {
                    if(key!=='TT' && key!=='UN') {
                        stateList.push([key, data[key].total])
                    }
                }
                return stateList;
            })
        )
    }

    getStatesWithHighestConfirmedCases() {
        return this.getStateListForHighestRecord().pipe(
           map((data:[]) => {
                data.sort((a: Object,b: Object) => b[1].confirmed-a[1].confirmed);
                const result = [];
                for(let i=0;i<5;i++) {
                    result.push({
                        name: this.STATE_NAMES[data[i][0]], cases: data[i][1]['confirmed']
                    })
                }
                return result;
           })
       )
    }

    getStatesWithHighestRecoveredCases() {
        return this.getStateListForHighestRecord().pipe(
            map((data:[]) => {
                 data.sort((a: Object,b: Object) => b[1].recovered-a[1].recovered);
                 const result = [];
                 for(let i=0;i<5;i++) {
                     result.push({
                         name: this.STATE_NAMES[data[i][0]], cases: data[i][1]['recovered']
                     })
                 }
                 return result;
            })
        )
    }

    getStateWithHighestVaccinations() {
        return this.getStateListForHighestRecord().pipe(
            map((data:[]) => {
                 data.sort((a: Object,b: Object) => b[1].vaccinated-a[1].vaccinated);
                 const result = [];
                 for(let i=0;i<5;i++) {
                     result.push({
                         name: this.STATE_NAMES[data[i][0]], cases: data[i][1]['vaccinated']
                     })
                 }
                 return result;
            })
        )
    }

    getTimeSeriesDataForIndividual(state:string = "TT", type: string= 'confirmed') {
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
}