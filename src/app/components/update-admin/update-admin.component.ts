import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  updateForm : FormGroup;
  id :any;
  admin:any;

  constructor(private adminService : AdminService , private router : Router ,
    private formBuilder : FormBuilder , private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.updateForm = this.formBuilder.group({
      firstName:["",[Validators.required , Validators.minLength(3), Validators.maxLength(20)]],
      lastName:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
      telephone : ["",[Validators.required , Validators.minLength(8) , Validators.maxLength(8)]],
      adresse : ["",[Validators.required , Validators.minLength(3), Validators.maxLength(50)]],

    })
    this.adminService.getAdminById(this.id).subscribe(
      (data)=>{
        this.admin = data.admin;
        this.updateForm.patchValue(this.admin);
      }
    )
    
  }
  ///*** Button Update Admin //*/*/
  updateAdmin(){
    this.updateForm.value._id = this.id;
    console.log("Here update Form From Admin",this.updateForm.value);
    this.adminService.updateAdmin(this.updateForm.value).subscribe(
      (response)=>{
        console.log("Here response update admin",response);
        this.router.navigate(["adminTable"]);
        
      }
    )
    
  }
    ///*** Button Cancel Admin //*/*/
    cancel(){
      this.router.navigate(["adminTable"]);
    }



}
