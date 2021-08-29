import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private _http: HttpClient
  ) { }

  private API = 'http://localhost:8080/api/';
  private getProductCategory = "app/category/get";
  private addProduct = "admin/product/add";
  private getProroductByCategory = "user/products/category/";
  private getProductbyId = "user/product/";
  private varEditProduct = "admin/product/edit";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getCategory():Observable<ProductCategory[]>{
    return this._http.get<ProductCategory[]>(this.API+this.getProductCategory, this.httpOptions);
  }

  addProducts(product:Product):Observable<Product[]>{
    return this._http.post<Product[]>(this.API+this.addProduct,product,this.httpOptions);
  }

  getProduct(category:string){
    return this._http.get<Product[]>(this.API+this.getProroductByCategory+category, this.httpOptions);
  }

  getProductById(id:string){
    return this._http.get<Product[]>(this.API+this.getProductbyId+id, this.httpOptions);

  }

  editProduct(product:Product){
    return this._http.post<Product[]>(this.API+this.varEditProduct,product,this.httpOptions);
  }
}
