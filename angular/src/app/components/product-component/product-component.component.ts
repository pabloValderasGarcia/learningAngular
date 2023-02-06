import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
    selector: 'app-product-component',
    templateUrl: './product-component.component.html',
    styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {
    name: string;
    cost: number;
    constructor(private appService: AppServiceService, private router: Router, private route: ActivatedRoute) {
        this.name = this.route.snapshot.params['name'];
        this.cost = 0;
        this.appService.products.forEach(product => {
            if (product.name.toLowerCase() == this.name) {
                this.cost = product.cost;
            }
        });
    }
}
