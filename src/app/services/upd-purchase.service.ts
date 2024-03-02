import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdPurchaseService {

 purchaseUrl: string = "http://localhost:3007/updPurchases"
  constructor(private http : HttpClient) { }
  getpurchaseById(id:any){
    return this.http.get<{repond : string , message : any}>(`${this.purchaseUrl}/${id}`);
  }
  updatePurchase(obj:any){
    return this.http.put<{message : string}>(this.purchaseUrl,obj);
  }
}
