import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Product } from '../models/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  products: Product[] = [];
  fileredProduct: Product[] = [];
  category;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { 
    productService.getAll().subscribe(products => {
      this.products = products;
      
      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');

          this.fileredProduct = (this.category)? 
                                            this.products.filter(p => p.category === this.category)
                                            : this.products;
        
      })
    });    
  }

}
