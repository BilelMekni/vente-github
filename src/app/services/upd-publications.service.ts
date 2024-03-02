import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdPublicationsService {
  publicationUrl: string = "http://localhost:3007/updPublications"
  constructor(private http : HttpClient) { }
  getpublishById(id:any){
    return this.http.get<{controle : string , message : any}>(`${this.publicationUrl}/${id}`);
  }
  updatePub(obj:any){
    return this.http.put<{message : string}>(this.publicationUrl,obj);
  }
}
