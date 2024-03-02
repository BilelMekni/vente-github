import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdResponseService } from 'src/app/services/upd-response.service';

@Component({
  selector: 'app-update-response',
  templateUrl: './update-response.component.html',
  styleUrls: ['./update-response.component.css']
})
export class UpdateResponseComponent implements OnInit {
  updateForm : FormGroup;
  id : any;
  info : any;

  constructor(private updResponseService : UpdResponseService , private router : Router ,
    private activatedRoute : ActivatedRoute , private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.updateForm = this.formBuilder.group({
      firstName :["",[Validators.required , Validators.minLength(3), Validators.maxLength(20)]],
      lastName : ["",[Validators.required , Validators.minLength(3), Validators.maxLength(20)]],
      subject : ["",[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]],
      message : ["",[Validators.required , Validators.minLength(3) , Validators.maxLength(1000)]],
    })
    this.updResponseService.getResponseById(this.id).subscribe(
      (data)=>{
        console.log("here data by id",data);
        this.info = data.info;
        this.updateForm.patchValue(this.info);
        
      }
    )
  }
  //***  Button Updata Response *///
  updateResponse(){
   this.updateForm.value._id = this.id;
   console.log("here edit from response",this.updateForm.value);
   this.updResponseService.updateResponse(this.updateForm.value).subscribe(
    (data)=>{
      console.log("here response after update",data);
      this.router.navigate(["responseTable"]);
      
    }
   )
   }
   //** Button Cance //** */ */
   cancel(){
    this.router.navigate(["responseTable"]);

   }
}
