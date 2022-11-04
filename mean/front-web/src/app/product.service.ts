import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  uri='http://localhost:8000/product'
  addProduct(product:Product){
    this.http.post(`${this.uri}`, product).subscribe(res => console.log('Done'));
  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.uri}`)
  }
  getProduct(id:any){
    return this.http.get<Product[]>(`${this.uri}/${id}`)
  }
  updateProduct(id:any,data:any){
    return this.http.put(`${this.uri}/${id}`,data).subscribe(res=>console.log(res))
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.uri}/${id}`).subscribe(res=>console.log(res))
  }
}
