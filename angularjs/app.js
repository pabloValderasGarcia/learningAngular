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
    .when('/chart', {
        templateUrl: 'chart.html',
        resolve: {
            resolveData: () => {
                document.getElementById('title').style.display = 'none';
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                document.getElementById('navChart').classList.add('active');
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

    // Chart
    list.chart = [];

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

    // Add Product To Chart
    list.addToChart = () => {
        // Get Selected Product Values
        let name = list.selectedProduct;
        let amount = list.amount;
        let product = list.products.find(prd => prd.name == name);

        // Add To Chart
        let existsProduct = false;
        list.chart.forEach(product => {
            if (product.name == name) existsProduct = {exists: true, product: list.chart.indexOf(product)};
        });
        if (product != undefined && amount > 0 && amount == parseInt(amount) && !existsProduct.exists) {
            let total = product.cost * amount;
            list.chart.push({
                name: product.name,
                cost: product.cost,
                amount: parseInt(amount),
                total: parseFloat(total.toFixed(2))
            });
        } else if (existsProduct.exists) {
            list.chart[existsProduct.product].amount = 
            list.chart[existsProduct.product].amount + parseInt(amount);
            list.chart[existsProduct.product].total =
            parseFloat((list.chart[existsProduct.product].amount * list.chart[existsProduct.product].cost).toFixed(2));
        }
    }

    // Get Total Chart
    list.getTotalChart = () => {
        let total = 0;
        list.chart.forEach(x => {
            total += x.total;
        });
        return total.toFixed(2);
    }
});