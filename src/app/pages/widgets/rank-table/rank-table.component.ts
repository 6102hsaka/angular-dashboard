import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-rank-table',
    templateUrl: './rank-table.component.html',
    styleUrls: ['./rank-table.component.scss']
})
export class RankTableComponent implements OnInit {

    @Input() dataSource: [];
    @Input() title: string;

    constructor() { }

    ngOnInit(): void { }

    displayedColumns: string[] = ['name', 'cases'];

}