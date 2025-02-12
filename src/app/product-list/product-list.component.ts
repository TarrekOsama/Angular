import { Component, OnInit } from '@angular/core';
import { product } from '../../app/models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductRequestService } from '../services/product-request.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [ProductCardComponent],
})
export class ProductListComponent implements OnInit {
  products: product[] = []; // List of products for the current page
  currentPage = 1; // Current page number
  itemsPerPage = 10; // Number of items per page
  totalProducts = 0; // Total number of products
  visiblePages: number[] = []; // Array of visible page numbers (e.g., [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  maxVisiblePages = 10; // Maximum number of visible page numbers

  constructor(private productRequestService: ProductRequestService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  // Fetch products for the current page
  fetchProducts() {
    const skip = (this.currentPage - 1) * this.itemsPerPage;
    this.productRequestService.getProductRequest(this.itemsPerPage, skip).subscribe(
      (res) => {
        this.products = res.products;
        this.totalProducts = res.total;
        this.updateVisiblePages(); // Update visible pages after fetching products
      },
      (error) => console.error('Error fetching products', error)
    );
  }

  // Go to the next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchProducts();
    }
  }

  // Go to the previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchProducts();
    }
  }

  // Go to a specific page
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchProducts();
    }
  }

  // Calculate the total number of pages
  get totalPages(): number {
    return Math.ceil(this.totalProducts / this.itemsPerPage);
  }

  // Update the visible pages array
  updateVisiblePages() {
    const halfRange = Math.floor(this.maxVisiblePages / 2);
    let startPage = Math.max(1, this.currentPage - halfRange);
    let endPage = Math.min(this.totalPages, startPage + this.maxVisiblePages - 1);

    // Adjust startPage if endPage exceeds totalPages
    if (endPage - startPage + 1 < this.maxVisiblePages) {
      startPage = Math.max(1, endPage - this.maxVisiblePages + 1);
    }

    this.visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    console.log('Visible Pages:', this.visiblePages);
    console.log('Current Page:', this.currentPage);
    console.log('Total Pages:', this.totalPages);}
}


