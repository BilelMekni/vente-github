import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminUrl: string = "http://localhost:3007/admin";

  constructor(private http: HttpClient) { }
  //Request : Signup Admin
  //Response : String
  signup(obj: any, img: File) {
    let formData = new FormData();
    formData.append("firstName", obj.firstName);
    formData.append("lastName", obj.lastName);
    formData.append("date", obj.date);
    formData.append("email", obj.email);
    formData.append("telephone", obj.telephone);
    formData.append("adresse", obj.adresse);
    formData.append("password", obj.password);
    formData.append("confPassword", obj.confPassword);
    formData.append("role", obj.role);
    formData.append("gender", obj.gender);
    formData.append("img", img);

    return this.http.post<{ message: string }>(`${this.adminUrl}/signup`, formData)
  };
  //*** get all admin in components admin-table **** */
  getAllAdmin() {
    return this.http.get<{ admin: any }>(this.adminUrl)
  }
  //*** get  admin by Id  **** */
  getAdminById(id: any) {
    return this.http.get<{ admin: string, message: any }>(`${this.adminUrl}/${id}`);
  }
  //*** Delete admin **** */
  deleteAdmin(id: any) {
    return this.http.delete<{ isDeleted: boolean }>(`${this.adminUrl}/${id}`);
  }
    //*** Update admin **** */
  updateAdmin(obj:any){
    return this.http.put<{message : string}>(this.adminUrl,obj);
  }



}

