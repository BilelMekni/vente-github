import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm : FormGroup;
  searche : any=[];

  constructor(private formBuilder : FormBuilder , private productsService : ProductsService , private router : Router) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group(
      {
        name:["",[Validators.required , Validators.minLength(2) , Validators.maxLength(20)]],
        price:["",[Validators.required]],
        stock:["",[Validators.required]]
      }
    )
  }
  ///**bouton search **//// */
  search(){
    this.productsService.searchProducts(this.searchForm.value).subscribe(
      (response)=>{
        this.searche = response.searchTab;
        console.log("here search by products",this.searche);
        
      }
    )
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your search products has been saved',
      showConfirmButton: false,
      timer: 1500
    })

  }

}
