import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../../app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductRequestService {
  constructor(private http: HttpClient) {}

  getProductRequest(limit: number, skip: number): Observable<{ products: product[]; total: number }> {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    return this.http.get<{ products: product[]; total: number }>(url);
  }
}