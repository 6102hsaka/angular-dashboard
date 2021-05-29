import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DashboardService } from './dashboard.service';
import { IHeaderCard } from './header-card/header-card';
import { IRankTable } from './rank-table/rank-table';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	headerData$: Observable<IHeaderCard[]>;
	statesWithHighestConfirmedCases$: Observable<IRankTable[]>;
	statesWithHighestRecoveredCases$: Observable<IRankTable[]>;
	statesWithHighestVaccination$: Observable<IRankTable[]>;

  	constructor(private dashboardService: DashboardService) {
		this.dashboardService.fetch();
	}

  	ngOnInit(): void {
		this.headerData$ = this.dashboardService.getForIndia();

		this.statesWithHighestConfirmedCases$ = this.dashboardService
			.getStatesWithHighestConfirmedCases();

		this.statesWithHighestRecoveredCases$ = this.dashboardService
			.getStatesWithHighestRecoveredCases();

		this.statesWithHighestVaccination$ = this.dashboardService
			.getStateWithHighestVaccinations();
	}
}