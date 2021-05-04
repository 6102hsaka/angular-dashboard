import { Component, Input, OnChanges } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexFill,
    ApexMarkers,
    ApexYAxis,
    ApexXAxis,
  } from "ng-apexcharts";


@Component({
  selector: 'app-timeseries-chart',
  templateUrl: './timeseries-chart.component.html',
  styleUrls: ['./timeseries-chart.component.scss']
})
export class TimeseriesChartComponent implements OnChanges {

    @Input() datasource;

    public series: ApexAxisChartSeries;
    public chart: ApexChart;
    public dataLabels: ApexDataLabels;
    public markers: ApexMarkers;
    public title: ApexTitleSubtitle;
    public fill: ApexFill;
    public yaxis: ApexYAxis;
    public xaxis: ApexXAxis;
  
    constructor() { }

    ngOnChanges() {
        this.initChartData();
    }
  
    public initChartData(): void {
        this.series = [
            {
                name: "No. of cases",
                data: this.datasource
            }
        ];
        this.chart = {
            type: "area",
            stacked: false,
            height: "320px",
            zoom: {
                type: "x",
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: "zoom"
            }
        };
        this.dataLabels = {
            enabled: false
        };
        this.markers = {
            size: 0
        };
        this.title = {
            text: "Total Covid-19 cases",
            align: "left"
        };
        this.fill = {
            type: "gradient",
            gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
            }
        };
        this.yaxis = {
            labels: { },
            title: {
                text: "cases"
            }
        };
        this.xaxis = {
            type: "datetime"
        };
    }
}