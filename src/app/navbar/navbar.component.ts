import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../app/services/counter.service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemCount = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.getCartItems().subscribe(items => {
      this.cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }
}