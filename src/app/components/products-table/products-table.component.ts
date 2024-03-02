import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  produit : any={};
  pageOfItems: Array<any>;


  constructor(private router : Router , private productsService : ProductsService) { }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(
      (response)=>{
        this.produit = response.produits;
        console.log("here all products",this.produit);
        
      }
    )
  }
  /// Bouton Confirme Products in Admin /////
  confirmeProducts(id : any){
    this.productsService.confirmeProducts(id).subscribe(
      (response)=>{
        this.produit = response.message
        this.productsService.getAllProducts().subscribe(
          (response)=>{
            this.produit = response.produits;
            console.log("here all products",this.produit);
          }
        )
      }
      
    )
    this.router.navigate(["admin"]);

  }
    /// Bouton  Products in Admin and Owners /////
  delteProducts(id:any){
  this.productsService.deleteProducts(id).subscribe(
    (data)=>{
   console.log("Here data products after delete",data);
   this.productsService.getAllProducts().subscribe(
    (response)=>{
      this.produit = response.produits;
    }
   )
   
    }
  )
  Swal.fire({
    title: 'Delete Products!',
    text: 'Delete With Success.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
  }

   /// Bouton disponibilite Products in Admin /////
  //   stateProducts(id : any){
  //    this.productsService.confirmeProducts(id).subscribe(
  //      (response)=>{
  //        this.produit = response.message
  //       this.productsService.getAllProducts().subscribe(
  //          (response)=>{
  //            this.produit = response.produit;
  //            console.log("here all products",this.produit);
   
  //       }
  //       )
  //     }
      
  //    )
  //    this.router.navigate(["admin"]);

  //  }
  deleteProducts(id:any){
    this.productsService.deleteProducts(id).subscribe(
      (response)=>{
        console.log("here products after delete",response);
        this.productsService.getAllProducts().subscribe(
          (response)=>{
            this.produit = response.produits;
          }
        )
        
      }
    )
  }

 ///// Button Update Products /////
 updateProducts(id :any){
  this.router.navigate([`updateProducts/${id}`]);
 }


  /////// Pagination ///////////////
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
