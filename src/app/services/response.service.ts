import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  responseUrl: string = "http://localhost:3007/responses"
  constructor(private http : HttpClient) { }
  //Add Return Response By Ownerss
  addResponse(obj: any) {
    return this.http.post<{ message: string, isAdded: boolean }>(this.responseUrl, obj);
  }
   //Get all Products By Clients
   getAllResponse() {
    return this.http.get<{ examens: any }>(`${this.responseUrl}/all/reponse/reponse/reponse`);
  }
  //Get Return Response By ID
  getResponseById(id: any) {
    return this.http.get<{ exams: string }>(`${this.responseUrl}/${id}`);
  }
  ///***Confirmation Response by admin */
  confirmeResponse(id: any) {
    return this.http.post<{ message: string }>(`${this.responseUrl}/status/${id}`, id);
  }
    ///***Get Response Confirme by admin */
  getResponseConfirme(){
    return this.http.get<{pubs : any}>(`${this.responseUrl}`);
  }
  deleteReturnResponse(id: any){
    return this.http.delete<{isDeleted : boolean}>(`${this.responseUrl}/${id}`);
  }
}
