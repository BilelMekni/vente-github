import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  venteUrl: string = "http://localhost:3007/ventes"

  constructor(private http: HttpClient) { }
  //Add Purchase Products By Clients
  addAchat(obj: any) {
    return this.http.post<{ message: string, isAdded: boolean }>(this.venteUrl, obj);
  }
  //Get all Products By Clients
  getAllPurchase() {
    return this.http.get<{ pure: any }>(`${this.venteUrl}/all`);
  }
  //Get Purchase Products By ID
  getPurchaseById(id: any) {
    return this.http.get<{ vendre: string }>(`${this.venteUrl}/${id}`);
  }
  ///***Confirmation Examens by admin */
  confirmePurchase(id: any) {
    return this.http.post<{ message: string }>(`${this.venteUrl}/status/${id}`, id);
  }
  ///***Get Confirme Purchase Clients */
  getPurchaseConfirme(){
  return this.http.get<{conforme : any}>(`${this.venteUrl}`);
}
 ///Delete Purchase Clients 
 deletePurchase(id: any) {
  return this.http.delete<{ isDeleted: boolean }>(`${this.venteUrl}/${id}`);
}
}
