import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';


@Component({
    selector: 'app-header-card',
    templateUrl: './header-card.component.html',
    styleUrls: ['./header-card.component.scss']
})
export class HeaderCardComponent implements OnInit {

    @Input() title: string;
    @Input() oneday: number;
    @Input() total: number;

    constructor(private service: DashboardService) { }

    ngOnInit(): void { }

    formatNumber = (num: number) => this.service.formatNumber(num);
}