import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashboardService } from './dashboard.service';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

	headerData = [];
	
	statesWithHighestConfirmedCases = [];
	statesWithHighestRecoveredCases = [];
	statesWithHighestVaccination = [];

	getForIndiaSubscription: Subscription;
	highestConfirmedCasesSubscription: Subscription;
	highestRecoveredCasesSubscription: Subscription;
	highestVaccinationSubscription: Subscription;

  	constructor(private dashboardService: DashboardService) {
		this.dashboardService.fetch();
	}

  	ngOnInit(): void {
		this.getForIndiaSubscription = this.dashboardService
			.getForIndia()
				.subscribe(data => {
					this.headerData = data
				});

		this.highestConfirmedCasesSubscription = this.dashboardService
			.getStatesWithHighestConfirmedCases()
				.subscribe(data => {
					this.statesWithHighestConfirmedCases = data;
				});

		this.highestRecoveredCasesSubscription = this.dashboardService
			.getStatesWithHighestRecoveredCases()
				.subscribe(data => {
					this.statesWithHighestRecoveredCases = data;
				})

		this.highestVaccinationSubscription = this.dashboardService
			.getStateWithHighestVaccinations()
				.subscribe(data => {
					this.statesWithHighestVaccination = data
				});
	}

  	ngOnDestroy(): void {
		this.getForIndiaSubscription.unsubscribe();
		this.highestConfirmedCasesSubscription.unsubscribe();
		this.highestRecoveredCasesSubscription.unsubscribe();
		this.highestVaccinationSubscription.unsubscribe();
	}
}