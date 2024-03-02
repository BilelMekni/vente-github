import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PubliciteService {
  pubUrl: string = "http://localhost:3007/publicites"

  constructor(private http: HttpClient) { }
  //Request : Add Publications by Client
  //Response : String
  addPublications(obj: any) {
    return this.http.post<{ message: string, isAdded: boolean }>(this.pubUrl, obj);
  }
  ///Get All Publications Clients 
  ///Get All Publications Clients by aggregate
  getAllPublications() {
    return this.http.get<{ publication: any }>(`${this.pubUrl}/all/all/all`);
  }
  ///Get Publications Clients By Id
  getPublicationsById(id: any) {
    return this.http.get<{ work: string }>(`${this.pubUrl}/${id}`);
  }
  ///Delete Publications Clients 
  deletePublications(id: any) {
    return this.http.delete<{ isDeleted: boolean }>(`${this.pubUrl}/${id}`);
  }
}
