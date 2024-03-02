import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-purchase-products',
  templateUrl: './purchase-products.component.html',
  styleUrls: ['./purchase-products.component.css']
})
export class PurchaseProductsComponent implements OnInit {
  venteForm : FormGroup;
  id :any;
  vente : any={};
  vendre : any;

  constructor(private router : Router,private purchaseService : PurchaseService) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClients")
    this.purchaseService.getPurchaseById(this.id).subscribe(
      (data)=>{
        this.vendre = data.vendre;

      }
    )
  }

//////Button Accepeter Achat /////
addVente(){
  if (this.id) {
    this.vente.clientId = this.id;
    this.vente.status = "Not Confirmed";
    this.purchaseService.addAchat(this.vente).subscribe(
      (data)=>{
        console.log("Here purchase products by clients",data);
        
      }
    )
  } 
   
    
    
  
  this.router.navigate(["purchaseTable"]);
}
//////Button Accepeter Achat /////
cancel(){
  this.router.navigate(["espaceClient"]);
}

 }

