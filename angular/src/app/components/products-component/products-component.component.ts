import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
    selector: 'app-products-component',
    templateUrl: './products-component.component.html',
    styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent {
    // Injection always created by constructor
    constructor(private appService: AppServiceService) { }

    products: any[] = this.appService.products;
    addProduct(name: HTMLInputElement, cost: HTMLInputElement) {
        this.appService.addProduct(name, cost);
    }

    showItemProducts(selectedProduct: String): void {
        this.appService.showItemProducts(selectedProduct);
    }

    removeItemProducts(selectedProduct: HTMLInputElement): void {
        this.appService.removeItemProducts(selectedProduct);
    }

    removeAllProducts(): void {
        this.products = [];
        this.appService.removeAllProducts();
    }
}