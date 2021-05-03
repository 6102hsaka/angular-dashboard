import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-header-card',
    templateUrl: './header-card.component.html',
    styleUrls: ['./header-card.component.scss']
})
export class HeaderCardComponent implements OnInit {

    @Input() title: string;
    @Input() oneday: number;
    @Input() total: number;

    constructor() { }

    ngOnInit(): void { }

    formatNumber(num: number): string {
        if(num===undefined)     
            return " ";
        let x=num.toString();
        let lastThree = x.substring(x.length-3);
        const otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
            lastThree = ',' + lastThree;
        return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    }
}