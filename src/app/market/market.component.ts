import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-market',
  imports: [ ProductListComponent, ProductCardComponent],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent {

}
