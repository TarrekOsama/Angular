// counter-component.component.ts
import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponentComponent {
  @Input() product: any;

  constructor(private counterService: CounterService) {}

  increaseCounter() {
    if (this.product.quantity < this.product.stock) {
      this.counterService.updateQuantity(
        this.product.id,
        this.product.quantity + 1
      );
    }
  }

  decreaseCounter() {
    if (this.product.quantity > 1) {
      this.counterService.updateQuantity(
        this.product.id,
        this.product.quantity - 1
      );
    }
  }
}



