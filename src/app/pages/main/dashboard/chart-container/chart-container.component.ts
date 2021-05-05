import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChartService } from './chart-container.service';


@Component({
    selector: 'app-chart-container',
    templateUrl: './chart-container.component.html',
    styleUrls: ['./chart-container.component.scss']
})
export class ChartContainerComponent implements OnInit, OnDestroy {

    individualTimeseriesData = [];
    allStatesCountData = [];

    individualTimeseriesSubscription: Subscription;
    allStatesSubscription: Subscription;

    constructor(private chartService: ChartService) { 
        this.chartService.fetch();
    }

    ngOnInit(): void {
        this.individualTimeseriesSubscription = this.chartService
			.getTimeSeriesDataForIndividual()
				.subscribe(data => {
					this.individualTimeseriesData = data
				});

        this.allStatesSubscription = this.chartService
                .getCasesCountForEveryState()
                    .subscribe(data => {
                        this.allStatesCountData= data;
                    });
    }

    ngOnDestroy(): void {
        this.individualTimeseriesSubscription.unsubscribe();
        this.allStatesSubscription.unsubscribe();
    }
}