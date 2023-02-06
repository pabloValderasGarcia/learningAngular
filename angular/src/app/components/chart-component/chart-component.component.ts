import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
    selector: 'app-chart-component',
    templateUrl: './chart-component.component.html',
    styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent {
    // Injection always created by constructor
    constructor(private appService: AppServiceService) { }

    products: any[] = this.appService.products;
    chart: any[] = this.appService.chart;
    addToChart(selectedProduct: HTMLInputElement, amount: HTMLInputElement): void {
        this.chart = this.appService.chart;
        this.appService.addToChart(selectedProduct, amount);
    }

    getTotalChart(): number {
        return this.appService.getTotalChart();
    }

    removeItemChart(selectedProduct: HTMLInputElement): void {
        this.appService.removeItemChart(selectedProduct);
    }

    removeAllChart(): void {
        this.chart = [];
        this.appService.removeAllChart();
    }
}
