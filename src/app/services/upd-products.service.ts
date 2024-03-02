import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdProductsService {
  productsUrl: string = "http://localhost:3007/updProducts"

  constructor(private http : HttpClient) { }
  getUpdateById(id:any){
    return this.http.get<{principale : string , message : any}>(`${this.productsUrl}/${id}`);
  }
  updateProducts(obj:any){
    return this.http.put<{message : string}>(this.productsUrl,obj);
  }
}
