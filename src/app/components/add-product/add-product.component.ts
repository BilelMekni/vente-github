import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm : FormGroup;
  id:any;
  product : any={};
  produit : any;
  

  constructor(private productsService : ProductsService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClients")
    this.productsService.getProductsById(this.id).subscribe(
      (response)=>{
        this.produit = response.produit;
      }
    )
  }

  ///**ADD PRODUCTS /*** */ */
  validate(){
    if (this.id) {
      this.product.ownersId = this.id;
      this.product.status = "Not Confirmed";
      // this.product.disponible = "Not Disponible"
      this.productsService.addProducts(this.product).subscribe(
        (response)=>{
          console.log("here products by owners",response);
          
        }
      )
    }
     
    Swal.fire({
      title: 'BIENVENUE!',
      text: 'ADD PRODUCTS IS SUCCESS.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
      
      
    
    this.router.navigate(["productsTable"]);
  }
  
  /// button cancel ////
  cancelProducts(){
    this.router.navigate(["espaceOwner"]);
  }

}
