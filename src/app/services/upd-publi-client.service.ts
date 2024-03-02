import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdPubliClientService {

  publUrl: string = "http://localhost:3007/updPubl";

  constructor(private http : HttpClient) { }
  getpublClientById(id:any){
    return this.http.get<{controle : string , message : any}>(`${this.publUrl}/${id}`);
  }
  updatePubClient(obj:any){
    return this.http.put<{message : string}>(this.publUrl,obj);
  }
}
