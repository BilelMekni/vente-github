import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  pubUrl: string = "http://localhost:3007/publications"

  constructor(private http : HttpClient) { }
  //Request : Add Publications by Owners
  //Response : String
  addPublications(obj : any){
    return this.http.post<{message : string , isAdded : boolean}>(this.pubUrl,obj);
  }
  ///Get All Publications Owners 
  ///Get All Publications Owners by aggregate
  getAllPublications(){
    return this.http.get<{publications : any}>(`${this.pubUrl}/all/pup/pup/pup`);
  }
  ///Get Publications by id
getPublicationsById(id:any){
  return this.http.get<{exams : string}>(`${this.pubUrl}/${id}`);
}
///Confirmation Publications by admin 
confirmePublications(id:any){
  return this.http.post<{message : string}>(`${this.pubUrl}/status/${id}`,id);
}
///Get Publications Confirmed
getPublicationConfirme(){
  return this.http.get<{pubs : any}>(`${this.pubUrl}`);
}
///Delete Publications
deletePublications(id: any) {
  return this.http.delete<{ isDeleted: boolean }>(`${this.pubUrl}/${id}`);
}
}
