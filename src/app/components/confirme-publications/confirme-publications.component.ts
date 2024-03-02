import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-confirme-publications',
  templateUrl: './confirme-publications.component.html',
  styleUrls: ['./confirme-publications.component.css']
})
export class ConfirmePublicationsComponent implements OnInit {
id : any;
publ : any;
  constructor(private publicationsService : PublicationsService , private router : Router) { }

  ngOnInit() {
    this.id=localStorage.getItem("connectedClients");
    this.publicationsService.getPublicationConfirme().subscribe(
      (data)=>{
        this.publ = data.pubs;
        console.log("Here publications confirmed",this.publ);
        
      }
    )
  }

}
