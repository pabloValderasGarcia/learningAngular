import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AppServiceService {
    constructor(private router: Router) { }

    // ------------ PRODUCTS ------------

    // Default Products
    products: any[] = [
        { name: 'Water', cost: 2.05 },
        { name: 'Banana', cost: 1.55 }
    ]

    // Add Product To Visual
    addProduct(name: HTMLInputElement, cost: HTMLInputElement): void {
        let nameProduct = name.value;
        let costProduct = parseFloat(cost.value);

        // Validate fields
        let existsProduct = false;
        this.products.forEach(product => {
            if (product.name == nameProduct) existsProduct = true;
        });
        if (nameProduct != '' && !isNaN(costProduct) && !existsProduct) {
            this.products.push({
                name: nameProduct,
                cost: costProduct
            })
        }
    }

    // Show item from products
    showItemProducts(selectedProduct: String): void {
        let name = selectedProduct.toLowerCase();
        this.router.navigate(['products/', name]);
    }

    // Remove item from products
    removeItemProducts(selectedProduct: HTMLInputElement): void {
        this.products.forEach(product => {
            if (product.name == selectedProduct) {
                this.products.splice(this.products.indexOf(product), 1);
                this.cart.splice(this.cart.indexOf(product), 1);
            }
        });
    }

    // Remove all products's items
    removeAllProducts(): void {
        this.products = [];
    }

    // ------------ CART ------------

    // Cart
    cart: any[] = [];

    // Add Product To Cart
    addToCart(selectedProduct: HTMLInputElement, amount: HTMLInputElement): void {
        // Get Selected Product Values
        let nameProduct = selectedProduct.value;
        let amountProduct = parseInt(amount.value);
        let product = this.products.find(prd => prd.name == nameProduct);

        // Add To Cart
        let existsProduct: any = false;
        this.cart.forEach(product => {
            if (product.name == nameProduct) existsProduct = { exists: true, product: this.cart.indexOf(product) };
        });
        if (product != undefined && amountProduct > 0 && !existsProduct.exists) {
            let total = product.cost * amountProduct;
            this.cart.push({
                name: product.name,
                cost: product.cost,
                amount: amountProduct,
                total: parseFloat(total.toFixed(2))
            });
        } else if (existsProduct.exists) {
            this.cart[existsProduct.product].amount =
                this.cart[existsProduct.product].amount + amountProduct;
            this.cart[existsProduct.product].total =
                parseFloat((this.cart[existsProduct.product].amount * this.cart[existsProduct.product].cost).toFixed(2));
        }
    }

    // Get Total Cart
    getTotalCart(): number {
        let total = 0;
        this.cart.forEach(x => {
            total += x.total;
        });
        return parseInt(total.toFixed(2));
    }

    // Remove item from cart
    removeItemCart(selectedProduct: HTMLInputElement): void {
        this.cart.forEach(product => {
            if (product.name == selectedProduct) {
                this.cart.splice(this.cart.indexOf(product), 1);
            }
        });
    }

    // Remove all cart's items
    removeAllCart(): void {
        this.cart = [];
    }
}
