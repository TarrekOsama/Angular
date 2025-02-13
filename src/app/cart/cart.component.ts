// cart-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../services/counter.service.service';
import { CounterComponentComponent } from "../counter/counter.component";

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule, CounterComponentComponent,],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartPageComponent {
  cartItems: any[] = [];

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  removeItem(productId: number) {
    this.counterService.removeFromCart(productId);
  }

  // Calculate the total price of all items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}


























