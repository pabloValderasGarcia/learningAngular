import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// App Service
import { AppServiceService } from './app-service.service';

// Components
import { AppComponent } from './app.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { ChartComponentComponent } from './components/chart-component/chart-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponentComponent,
        ChartComponentComponent,
        HomeComponentComponent,
        ProductComponentComponent,
        ErrorComponentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [AppServiceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
