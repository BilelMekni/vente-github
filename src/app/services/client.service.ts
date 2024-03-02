import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientUrl : string="http://localhost:3007/clients";

  constructor(private http : HttpClient) { }
  //Request : Signup Admin
  //Response : String
  signup(obj:any, img : File){
    let formData = new FormData();
    formData.append("firstName", obj.firstName);
    formData.append("lastName", obj.lastName);
    formData.append("date", obj.date);
    formData.append("email", obj.email);
    formData.append("telephone", obj.telephone );
    formData.append("adresse", obj.adresse);
    formData.append("password", obj.password);
    formData.append("confPassword", obj.confPassword);
    formData.append("role",obj.role);
    formData.append("status",obj.status);
    formData.append("gender", obj.gender);
    formData.append("img", img);

    return this.http.post<{message: string}>(`${this.clientUrl}/signup`,formData)
  }

  //******************Login ************************************************* */ */
  //Request : login
  //Response : string
  login(user : any){
    return this.http.post<{msg : String , patient : any}>(`${this.clientUrl}/login`,user);
  }

  //*******************Get All Client In Components Client Table**************** *///
  getAllClient(){
    return this.http.get<{client : any}>(this.clientUrl);
  }
  //*** get  admin by Id  **** */
  getClientById(id: any) {
    return this.http.get<{ client: string, message: any }>(`${this.clientUrl}/${id}`);
  }
  //*******************Delte Client**************** *///
  deleteClient(id: any){
    return this.http.delete<{isDeleted : boolean}>(`${this.clientUrl}/${id}`);
  }
  updateClient(obj:any){
    return this.http.put<{message : string}>(this.clientUrl,obj);
  }

}
