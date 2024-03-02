import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-publication-owner',
  templateUrl: './publication-owner.component.html',
  styleUrls: ['./publication-owner.component.css']
})
export class PublicationOwnerComponent implements OnInit {
  publicationsForm : FormGroup;
  publications : any={};
  id : any;
  publicite :any;

  constructor(private publicationsService : PublicationsService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClients")
    this.publicationsService.getPublicationsById(this.id).subscribe(
      (data)=>{
        this.publicite = data.exams;
      }
    )

  }
  /// Bouton Add Publications Owners ///
  validate(){
    if (this.id) {
      this.publications.ownersId = this.id;
      this.publications.status = "Not Confirmed";
      this.publicationsService.addPublications(this.publications).subscribe(
        (response) =>{
          console.log("Here response add publications owners",response);
         
       }
      );
      
    }
  this.router.navigate(["espaceOwner"]);
    
  }
  cancel(){
    this.router.navigate(["espaceOwner"]);
  }

}
