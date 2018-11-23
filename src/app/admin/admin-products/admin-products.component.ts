import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs';
import { Product } from '../../models/products';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts;
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = productService.getAll().subscribe(product => this.filteredProducts = this.products = product);    
   }

   filter(query: string) {
     this.filteredProducts = (query) ? 
            this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
            this.products;
   }

   ngOnDestroy() {
    this.subscription.unsubscribe();
   }
  ngOnInit() {
  }

}
