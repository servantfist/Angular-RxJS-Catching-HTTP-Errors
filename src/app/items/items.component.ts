import {
  Component,
  // OnInit, OnDestroy --> Unnecessary
} from '@angular/core';
import { ItemService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
// implements OnInit, OnDestroy  --> Unnecessary
export class ItemsComponent {
  pageTitle = 'Items List';
  errorMessage = '';
  //categories: ItemsCategory[] = [];

  //products: Product[] = [];
  items$ = this.itemService.getItems();
  // sub!: Subscription; --> Unnecessary

  constructor(private itemService: ItemService) {}

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