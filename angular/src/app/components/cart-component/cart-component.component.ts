import { Component } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
    selector: 'app-cart-component',
    templateUrl: './cart-component.component.html',
    styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {
    // Injection always created by constructor
    constructor(private appService: AppServiceService) { }

    products: any[] = this.appService.products;
    cart: any[] = this.appService.cart;
    addToCart(selectedProduct: HTMLInputElement, amount: HTMLInputElement): void {
        this.cart = this.appService.cart;
        this.appService.addToCart(selectedProduct, amount);
    }

    getTotalCart(): number {
        return this.appService.getTotalCart();
    }

    removeItemCart(selectedProduct: HTMLInputElement): void {
        this.appService.removeItemCart(selectedProduct);
    }

    removeAllCart(): void {
        this.cart = [];
        this.appService.removeAllCart();
    }
}
