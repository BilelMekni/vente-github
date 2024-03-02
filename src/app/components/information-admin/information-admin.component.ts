import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-admin',
  templateUrl: './information-admin.component.html',
  styleUrls: ['./information-admin.component.css']
})
export class InformationAdminComponent implements OnInit {
  actualDate: any;
  title : string = "admin";
  constructor(private router: Router) { }

  ngOnInit() {
    this.actualDate = new Date();
  }
  ///button admin table //////
  adminTable(){
   this.router.navigate(["adminTable"]);

  }
  ///button owner table //////
  ownerTable(){
    this.router.navigate(["ownerTable"]);
  }
  ///button client table //////
  clientTable(){
    this.router.navigate(["clientTable"]);
  }
  /// button products table //////
  productsTable(){
    this.router.navigate(["productsTable"]);
  } 
   /// button contact table //////
   contactTable(){
    this.router.navigate(["contactTable"]);
  } 
  /// button publications table //////
  publicationsTable(){
    this.router.navigate(["publicationsTable"]);

  }
    /// button publications clients table //////
    publicationsClientsTable(){
    this.router.navigate(["publicationsClientsTable"]);
  }
    /// button purchase products table //////
  purchaseProductsTable(){
    this.router.navigate(["purchaseTable"])
  }
      /// button return response table //////
  returnResponseTable(){
  this.router.navigate(["responseTable"]);
  }
        /// button return response table confirme //////
  returnResponseConfirme(){
  this.router.navigate(["responseConfirme"]);
  }

}
