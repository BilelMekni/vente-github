import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdResponseService {
  responseUrl: string = "http://localhost:3007/updResponses"
  constructor(private http : HttpClient) { }
  getResponseById(id:any){
    return this.http.get<{info : string , message : any}>(`${this.responseUrl}/${id}`);
  }
  updateResponse(obj:any){
    return this.http.put<{message : string}>(this.responseUrl,obj);
  }
}
