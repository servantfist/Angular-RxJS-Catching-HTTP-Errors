import {
  Component,
  // OnInit, OnDestroy --> Unnecessary
} from '@angular/core';

import { Subscription } from 'rxjs';
import { Item } from './item';

import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
// implements OnInit, OnDestroy  --> Unnecessary
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories: ProductCategory[] = [];

  //products: Product[] = [];
  products$ = this.productService.getProducts();
  // sub!: Subscription; --> Unnecessary

  constructor(private productService: ProductService) {}

  /* --> Unnecessary
  ngOnInit(): void {
    // Don't do this in production code. This is procedural code.
    this.sub = this.productService.getProducts()
      .subscribe({
        next: products => this.products = products,
        error: err => this.errorMessage = err
      });
  }
*/

  /* --> Unnecessary
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
*/
  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}