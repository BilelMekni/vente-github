import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-confirme',
  templateUrl: './products-confirme.component.html',
  styleUrls: ['./products-confirme.component.css']
})
export class ProductsConfirmeComponent implements OnInit {
id : any;
products : any;
pageOfItems: Array<any>;

  constructor(private productsService : ProductsService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClients");
    this.productsService.getProductsConfirme().subscribe(
      (response)=>{
        this.products = response.produit
        console.log("Here products confirmer",this.products);
        
      }
    )
  }
//////////// Pagination ///////////////
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }
//////////// Boutton Purchase Products ///////////////
    purchaseProducts(){
      this.router.navigate(["purchaseProducts"]);
    }

}
