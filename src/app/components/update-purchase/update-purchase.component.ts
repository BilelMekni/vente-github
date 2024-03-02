import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdPurchaseService } from 'src/app/services/upd-purchase.service';

@Component({
  selector: 'app-update-purchase',
  templateUrl: './update-purchase.component.html',
  styleUrls: ['./update-purchase.component.css']
})
export class UpdatePurchaseComponent implements OnInit {
 updateForm : FormGroup;
 id : any;
 produit : any;
  constructor(private updPurchaseService : UpdPurchaseService , private activatedRoute : ActivatedRoute , private router : Router,
    private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.updateForm = this.formBuilder.group({
      firstName : ["",[Validators.required , Validators.minLength(3), Validators.maxLength(20)]],
      lastName : ["",[Validators.required , Validators.minLength(3), Validators.maxLength(20)]],
      phone : ["",[Validators.required , Validators.minLength(3) , Validators.maxLength(8)]],
      type : ["",[Validators.required]],
      products :["",[Validators.required]],
      price : ["",[Validators.required]],
      quantity : ["",[Validators.required]],
    })
    this.updPurchaseService.getpurchaseById(this.id).subscribe(
      (response)=>{
        console.log("here update purchase by id",response);
        this.produit = response.repond;
        this.updateForm.patchValue(this.produit);
        
      }
    )
  }
  //** // Button Update Purchase //**/
  updatePurchase(){
    this.updateForm.value._id = this.id;
    this.updPurchaseService.updatePurchase(this.updateForm.value).subscribe(
      (response)=>{
        console.log("here update purchase by id",response);
        this.router.navigate(["purchaseTable"]);
        
      }
    )
  }
  //**// Button Cancel //* */
  cancel(){
    this.router.navigate(["purchaseTable"]);

  }
  

}
