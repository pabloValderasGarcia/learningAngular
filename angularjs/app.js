// Name to app angular and import ([]) ngRoute
let app = angular.module('app', ['ngRoute']);

// Configuration
app.config(function($routeProvider) {
    // Get nav items to add active class later
    let navItems = document.querySelectorAll('.navItem');

    // Eval routes and do some things
    $routeProvider
    .when('/', {
        resolve: {
            resolveData: () => {
                document.getElementById('title').style.display = 'block';
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                document.getElementById('navHome').classList.add('active');
            }
        }
    })
    .when('/products', {
        templateUrl: 'products.html',
        resolve: {
            resolveData: () => {
                document.getElementById('title').style.display = 'none';
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                document.getElementById('navProducts').classList.add('active');
            }
        }
    })
    .when('/cart', {
        templateUrl: 'cart.html',
        resolve: {
            resolveData: () => {
                document.getElementById('title').style.display = 'none';
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                document.getElementById('navCart').classList.add('active');
            }
        }
    });
});

// Controller
app.controller('AppController', function ($scope) { // Scope: vínculo entre html y js
    // This => Scope (function)
    let list = this;

    // Default Products
    list.products = [
        { name: 'Water', cost: 2.05 },
        { name: 'Banana', cost: 1.55 }
    ]

    // Cart
    list.cart = [];

    // Add Product To Visual
    list.addProduct = () => {
        let name = list.name;
        let cost = list.cost;
        
        // Validate fields
        let existsProduct = false;
        list.products.forEach(product => {
            if (product.name == name) existsProduct = true;
        });
        if (name != '' && cost != '' && !isNaN(cost) && !existsProduct) {
            list.products.push({
                name: name,
                cost: cost
            })

            list.name = '';
            list.cost = '';
        }
    }

    // Add Product To Cart
    list.addToCart = () => {
        // Get Selected Product Values
        let name = list.selectedProduct;
        let amount = list.amount;
        let product = list.products.find(prd => prd.name == name);

        // Add To Cart
        let existsProduct = false;
        list.cart.forEach(product => {
            if (product.name == name) existsProduct = {exists: true, product: list.cart.indexOf(product)};
        });
        if (product != undefined && amount > 0 && amount == parseInt(amount) && !existsProduct.exists) {
            let total = product.cost * amount;
            list.cart.push({
                name: product.name,
                cost: product.cost,
                amount: parseInt(amount),
                total: parseFloat(total.toFixed(2))
            });
        } else if (existsProduct.exists) {
            list.cart[existsProduct.product].amount = 
            list.cart[existsProduct.product].amount + parseInt(amount);
            list.cart[existsProduct.product].total =
            parseFloat((list.cart[existsProduct.product].amount * list.cart[existsProduct.product].cost).toFixed(2));
        }
    }

    // Get Total Cart
    list.getTotalCart = () => {
        let total = 0;
        list.cart.forEach(x => {
            total += x.total;
        });
        return total.toFixed(2);
    }
});