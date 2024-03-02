import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  ownerUrl: string = "http://localhost:3007/owners";

  constructor(private http: HttpClient) { }
  //Request : Signup Owner
  //Response : String
  signup(obj: any, img: File) {
    let formData = new FormData();
    formData.append("firstName", obj.firstName);
    formData.append("lastName", obj.lastName);
    formData.append("date", obj.date);
    formData.append("email", obj.email);
    formData.append("telephone", obj.telephone);
    formData.append("adresse", obj.adresse);
    formData.append("matricule", obj.matricule);
    formData.append("password", obj.password);
    formData.append("confPassword", obj.confPassword);
    formData.append("role", obj.role);
    formData.append("gender", obj.gender);
    formData.append("img", img);

    return this.http.post<{ message: string }>(`${this.ownerUrl}/signup`, formData)
  }

  //***************Get All Owner In components Owner Table*********************** */
  getAllOwner() {
    return this.http.get<{ owner: any }>(this.ownerUrl)
  }
  //*** get  admin by Id  **** */
  getOwnerById(id: any) {
    return this.http.get<{ owner: string, message: any }>(`${this.ownerUrl}/${id}`);
  }
  //***************Owner Delete*********************** */
  deleteOwners(id: any) {
    return this.http.delete<{ isDeleted: boolean }>(`${this.ownerUrl}/${id}`);
  }
  //***************Update Owners*********************** */
  updateOwners(obj: any) {
    return this.http.put<{ message: string }>(this.ownerUrl, obj);
  }
}
