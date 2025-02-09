import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { product } from '../../app/models/product.model';
import { Router } from '@angular/router';
import { DiscountPipe } from '../pipe/discount.pipe';


@Component({
  selector: 'app-product-card',
  imports: [CommonModule, DiscountPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() productItem!: product;



  getStockStatus(stock: number): string {
    if (stock > 10) return 'In stock';
    if (stock > 0) return 'Low stock';
    return 'Out of stock';
  }

  getStockClass(stock: number): string {
    if (stock > 10) return 'bg-success';
    if (stock >0) return 'bg-warning';
    return 'bg-danger';
  }

getStars(rating: number): number[] {
  const stars = Array(Math.round(rating)).fill(0);
  return stars;
}

constructor(private router: Router) {}


handleRedirectToDetails(id: number) {
  this.router.navigate(['/product' , id]);
}

}
