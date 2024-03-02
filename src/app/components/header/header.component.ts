import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ClientService } from 'src/app/services/client.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id:any;
  connectedClients : any = {};

  constructor(private adminService : AdminService , private ownerService : OwnerService,
    private clientService : ClientService, private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClients");
    this.adminService.getAdminById(this.id).subscribe(
      (data)=>{
        this.connectedClients = data.admin;
        console.log("here admin connected",this.connectedClients);

      }
    )
    this.ownerService.getOwnerById(this.id).subscribe(
      (response)=>{
        this.connectedClients = response.owner;
        console.log("here owner connected",this.connectedClients);
        
      }
    )
    this.clientService.getClientById(this.id).subscribe(
      (data)=>{
        this.connectedClients = data.client;
        console.log("here client connected",this.connectedClients);
        
      }
    )
    
  }
   //**bouton logout //*** */ */
   logOut(){
    localStorage.removeItem("connectedClients");
    this.router.navigate([""]);
  }


}
