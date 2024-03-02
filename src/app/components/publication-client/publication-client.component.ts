import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PubliciteService } from 'src/app/services/publicite.service';

@Component({
  selector: 'app-publication-client',
  templateUrl: './publication-client.component.html',
  styleUrls: ['./publication-client.component.css']
})
export class PublicationClientComponent implements OnInit {
  publicationsForm : FormGroup;
  id : any;
  publications : any ={};
  pub : any;

  constructor(private publiciteService : PubliciteService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClients")
    this.publiciteService.getPublicationsById(this.id).subscribe(
      (data)=>{
        this.pub = data.work;
      }
      
    )


  }

  ////Button Validate /////
  validate(){
    if (this.id) {
      this.publications.clientId = this.id;
      this.publications.status = "Not Confirmed";
      this.publiciteService.addPublications(this.publications).subscribe(
        (data)=>{
          console.log("here data",data);
          
        }
       )
    } 
     
     
    this.router.navigate([""]);
    
  }
    ////Button Cancel /////
  cancel(){
    this.router.navigate(["espaceClient"])
  }

}
