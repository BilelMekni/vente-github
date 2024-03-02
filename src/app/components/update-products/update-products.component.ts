import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdProductsService } from 'src/app/services/upd-products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {
  updateForm : FormGroup;
  id : any;
  produit : any;

  constructor(private updProductsService : UpdProductsService , private formBuilder : FormBuilder ,
    private activatedRoute : ActivatedRoute , private router : Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.updateForm = this.formBuilder.group({
      name : ["",[Validators.required , Validators.minLength(3), Validators.maxLength(20)]],
      stock : ["",[Validators.required]],
      price : ["",[Validators.required]],
      supplier : ["",[Validators.required , Validators.minLength(3),Validators.maxLength(20)]]
    })
    this.updProductsService.getUpdateById(this.id).subscribe(
      (response)=>{
        this.produit = response.principale;
        this.updateForm.patchValue(this.produit);
      }
    )
    

  }
  //** Button Update Products */
  updateProducts(){
    this.updateForm.value._id = this.id;
    console.log("here update from products",this.updateForm.value);
    this.updProductsService.updateProducts(this.updateForm.value).subscribe(
      (data)=>{
        console.log("here products after update",data);
        this.router.navigate(["productsTable"]);
        
      }
    )
    

  }
  //*** Button Cance Products */
  cancelProducts(){
    this.router.navigate(["productsTable"]);

  }

}
