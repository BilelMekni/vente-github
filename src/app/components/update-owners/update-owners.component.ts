import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-update-owners',
  templateUrl: './update-owners.component.html',
  styleUrls: ['./update-owners.component.css']
})
export class UpdateOwnersComponent implements OnInit {

  constructor(private ownerService : OwnerService , private formBuilder : FormBuilder ,
    private activatedRoute : ActivatedRoute , private router : Router) { }
  updateForm : FormGroup;
  id : any;
  parts : any;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.updateForm = this.formBuilder.group({
      firstName : ["",[Validators.required , Validators.minLength(3), Validators.maxLength(20)]],
      lastName :["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
      telephone :["",[Validators.required , Validators.minLength(8), Validators.maxLength(20)]],
      adresse :["",[Validators.required , Validators.minLength(3), Validators.maxLength(50)]],
    })
    this.ownerService.getOwnerById(this.id).subscribe(
      (data)=>{
        this.parts = data.owner;
        this.updateForm.patchValue(this.parts);

      }
    )
  }
  ///*** Button Update Owners /** */ */
  updateOwners(){
    this.updateForm.value._id = this.id;
    console.log("Here updat form owners",this.updateForm.value);
    this.ownerService.updateOwners(this.updateForm.value).subscribe(
      (response)=>{
        console.log("here response update form",response);
        this.router.navigate(["ownerTable"]);
        
      }
    )
    
  }
    ///*** Button Cancel Owners /** */ */
 cancel(){
  this.router.navigate(["ownerTable"]);
 }

}
