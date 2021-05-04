import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../dashboard.service';


@Component({
    selector: 'app-chart-container',
    templateUrl: './chart-container.component.html',
    styleUrls: ['./chart-container.component.scss']
})
export class ChartContainerComponent implements OnInit, OnDestroy {

    individualTimeseriesData = [];

    individualTimeseriesSubscription: Subscription;

    constructor(private dashboardService: DashboardService) { }

    ngOnInit(): void {
        this.individualTimeseriesSubscription = this.dashboardService
			.getTimeSeriesDataForIndividual()
				.subscribe(data => {
					this.individualTimeseriesData = data
				});
    }

    ngOnDestroy(): void {
        this.individualTimeseriesSubscription.unsubscribe();
    }
}