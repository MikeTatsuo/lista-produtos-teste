import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from "./api.service";

import { Product } from "../models/Product";
import { Store } from "../models/Store";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private endpoint: string = "products/";

  constructor(
    private api: ApiService
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.api.get(this.endpoint)
  }

  public getProductStores(product_id: number): Observable<Store[]> {
    return this.api.get(`${this.endpoint}${product_id}`)
  }
}
