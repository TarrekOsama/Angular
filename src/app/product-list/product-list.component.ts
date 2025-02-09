import { Component } from '@angular/core';
import productlist from '../../../public/products.json';
import { product } from '../../app/models/product.model';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [ProductCardComponent]
})
export class ProductListComponent {
  products : product[] = productlist.products;

}
