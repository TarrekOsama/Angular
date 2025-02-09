import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import productlist from '../../../public/products.json';
import { product } from '../../app/models/product.model';
import { DiscountPipe } from '../pipe/discount.pipe';


@Component({
  selector: 'app-product-describtion',
  imports: [CommonModule , DiscountPipe],
  templateUrl: './product-describtion.component.html',
  styleUrl: './product-describtion.component.css'
})
export class ProductDescribtionComponent {

    products : product[] = productlist.products;

    productItem: any;
    @Input() id:string=''
    
    ngOnInit() {
     this.productItem = this.products.find(
     (product) => product.id === Number(this.id))
}

getStars(rating: number): number[] {
    const stars = Array(Math.round(rating)).fill(0);
    return stars;
  }
}