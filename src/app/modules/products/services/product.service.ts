import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api = 'https://localhost:5001/api';
  
  constructor(private http: HttpClient) {}
  
  getAll() {
    return this.http.get(`${this.api}/products`);
  }

  create(product: any) {
    return this.http.post(`${this.api}/products`, product);
  }

  update(id: number, product: any) {
    return this.http.put(`${this.api}/products/${id}`, product);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/products/${id}`);
  }
}
