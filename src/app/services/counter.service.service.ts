// counter.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private cartItems = new BehaviorSubject<any[]>([]);

  constructor() { }

  getCartItems() {
    return this.cartItems.asObservable();
  }

  addToCart(product: any) {
    const currentItems = this.cartItems.getValue();
    const itemIndex = currentItems.findIndex(item => item.id === product.id);

    if (itemIndex !== -1) {
      if (currentItems[itemIndex].quantity < product.stock) {
        currentItems[itemIndex].quantity += 1;
      }
    } else {
      currentItems.push({ ...product, quantity: 1 });
    }

    this.cartItems.next(currentItems);
  }

  removeFromCart(productId: number) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.filter(item => item.id !== productId);
    this.cartItems.next(updatedItems);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentItems = this.cartItems.getValue();
    const itemIndex = currentItems.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
      if (quantity <= currentItems[itemIndex].stock && quantity > 0) {
        currentItems[itemIndex].quantity = quantity;
      }
    }

    this.cartItems.next(currentItems);
  }
}
