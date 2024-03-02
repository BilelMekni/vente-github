import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsUrl: string = "http://localhost:3007/products"

  constructor(private http: HttpClient) { }
  //***Add products by Owners ***** */
  addProducts(obj: any) {
    return this.http.post<{ message: string, isAdded: boolean }>(this.productsUrl, obj);
  }
  //***All products by Owners ***** */
  getAllProducts() {
    return this.http.get<{ produits: any }>(`${this.productsUrl}/all`);
  }
  //***Confirme products by admin ***** */
  confirmeProducts(id: any) {
    return this.http.post<{ message: string }>(`${this.productsUrl}/status/${id}`, id);

  }
  //***All products by id Owners ***** */
  getProductsById(id: any) {
    return this.http.get<{ produit: string }>(`${this.productsUrl}/${id}`);
  }
  //***Get products Confirme ***** */
  getProductsConfirme() {
    return this.http.get<{ produit: any }>(`${this.productsUrl}`);
  }
 
  //***State products by Owners ***** */
  // disponibiliteProducts(id:any){
  //   return this.http.post<{message : string}>(`${this.productsUrl}/disponible/dispo/${id}`,id);

  // }
  //***Search products by name , price , stock ***** */
  searchProducts(obj: any) {
    return this.http.post<{ searchTab: string }>(`${this.productsUrl}/search`, obj);
  }
  //***Delete products by admin ***** */
  deleteProducts(id: any) {
    return this.http.delete<{ isDeleted: boolean }>(`${this.productsUrl}/${id}`);
  }
  updateProducts(obj: any) {
    return this.http.put<{ message: string }>(this.productsUrl, obj);
  }


}
