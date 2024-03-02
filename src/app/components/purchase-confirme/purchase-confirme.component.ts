import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-purchase-confirme',
  templateUrl: './purchase-confirme.component.html',
  styleUrls: ['./purchase-confirme.component.css']
})
export class PurchaseConfirmeComponent implements OnInit {
  id :any;
  purchase : any;

  constructor(private purchaseService : PurchaseService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClients")
    this.purchaseService.getPurchaseConfirme().subscribe(
      (data)=>{
        this.purchase = data.conforme
        console.log("here purchase confirme",this.purchase);
        
      }
    )
  }

  ///////// Accepeter Purchase Products ////////
  Accepter(){
    this.router.navigate(["returnResponse"]);
  }
   ///////// Accepeter Purchase Products ////////
   Cancel(){
    this.router.navigate(["productsConfirme"]);
  }


}
