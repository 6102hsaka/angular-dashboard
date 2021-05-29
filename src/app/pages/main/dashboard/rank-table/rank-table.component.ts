import { Component, Input, OnChanges } from '@angular/core';
import { DashboardService } from '../dashboard.service';


interface DataSource {
    name?: string;
    cases?: string | number;
}

@Component({
    selector: 'app-rank-table',
    templateUrl: './rank-table.component.html',
    styleUrls: ['./rank-table.component.scss']
})
export class RankTableComponent implements OnChanges {

    @Input() dataSource: DataSource[];
    @Input() title: string;

    constructor(private service: DashboardService) { }

    ngOnChanges(): void {
        if(!!this.dataSource) {
            this.dataSource = this.dataSource.map(record => {
                const newRecord: DataSource = {}
                newRecord['name'] = record['name'];
                newRecord['cases'] = this.service.formatNumber(record['cases']);
                return newRecord;
            });
        }
     }

    displayedColumns: string[] = ['name', 'cases'];
}