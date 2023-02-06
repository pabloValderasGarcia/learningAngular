import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

// Components
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';

const routes: Routes = [ // Sets up routes constant where you define your routes
    {
        path: '',
        component: HomeComponentComponent,
        resolve: {
            resolveData: () => {
                document.title = 'Home';
                let navItems = document.querySelectorAll('.navItem');
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                let navItem = document.getElementById('navHome') as HTMLInputElement;
                navItem.classList.add('active');
            }
        }
    },
    {
        path: 'products',
        component: ProductsComponentComponent,
        resolve: {
            resolveData: () => {
                document.title = 'Products';
                let navItems = document.querySelectorAll('.navItem');
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                let navItem = document.getElementById('navProducts') as HTMLInputElement;
                navItem.classList.add('active');
            }
        }
    },
    {
        path: 'products/:name',
        component: ProductComponentComponent,
        resolve: {
            resolveData: () => {
                document.title = 'Product';
                let navItems = document.querySelectorAll('.navItem');
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                let navItem = document.getElementById('navProducts') as HTMLInputElement;
                navItem.classList.add('active');
            }
        },
    },
    {
        path: 'chart',
        component: CartComponentComponent,
        resolve: {
            resolveData: () => {
                document.title = 'Chart';
                let navItems = document.querySelectorAll('.navItem');
                navItems.forEach(item => {
                    item.classList.remove('active');
                });
                let navItem = document.getElementById('navChart') as HTMLInputElement;
                navItem.classList.add('active');
            }
        }
    },
    {
        path: '**',
        component: ErrorComponentComponent
    }
];

// Configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }