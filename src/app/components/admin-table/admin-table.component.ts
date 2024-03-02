import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  admin: any={};
  pageOfItems: Array<any>;


  constructor(private adminService : AdminService , private router : Router) { }

  ngOnInit() {
    this.adminService.getAllAdmin().subscribe(
      (response)=>{
        this.admin = response.admin
      }
    )
  }

  ////// Pagination //////////
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }
  ////// Bouton delete admin //////////
  deleteAdmin(id:any){
  this.adminService.deleteAdmin(id).subscribe(
    (data)=>{
      console.log("Here admin after delete",data);
      this.adminService.getAllAdmin().subscribe(
        (response)=>{
          this.admin = response.admin;
        }
      )
      
    }
  )
  Swal.fire({
    title: 'Delete Admin!',
    text: 'Delete With Success.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })

}
  ////// Bouton update admin //////////
updateAdmin(id:any){
this.router.navigate([`updateAdmin/${id}`]);
}
}