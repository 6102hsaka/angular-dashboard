import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { 
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ChartComponent, 
} from "ng-apexcharts";

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges {

    @Input() datasource;
    @ViewChild('chartDiv') chartDiv: ChartComponent;

    public chartOptions = {}

    public labels: string[];
    public series: ApexNonAxisChartSeries;
    public chart: ApexChart;
    public responsive: ApexResponsive[];

    constructor() {
        this.chart = {
            type: "donut"
        }
        this.labels = []
        this.responsive = [
            {
                breakpoint: 5000,
                options: {
                    chart: {
                        // width: 480
                    },
                    legend: {
                        show: false
                    },
                    plotOptions: {
        
                    }
                }
            }
        ]
        this.series = []
    }

    ngOnChanges(): void {
        this.labels = []
        this.series = []

        this.datasource.forEach(item => {
            this.labels.push(item[0])
            this.series.push(item[1])
        });
    }   
}