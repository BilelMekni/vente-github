import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MustMatch } from 'src/app/validators/mustMatch';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  signupForm:FormGroup;
  imagePreview: any;
  path : string;
  pwdPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$";



  constructor(private formBuilder : FormBuilder , private router : Router ,
    private adminService : AdminService) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName : ["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
      lastName : ["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
      email : ["",[Validators.required , Validators.email]],
      telephone : ["",[Validators.required , Validators.minLength(8) , Validators.maxLength(8)]],
      adresse : ["",[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]],
      password : ["",[Validators.required , Validators.pattern(this.pwdPattern)]],
      confPassword:[""],
      date : ["",[Validators.required]],
      gender : [""],
      img : [""],

    },{
      validators:MustMatch("password","confPassword")

    }

    )
  }
   ///////////////***Signup Admin ********//////// ////////*/
   signup(){
    console.log("here object",this.signupForm.value);
    let role = (this.path == "/signupAdmin")? "admin":"clients";
    this.signupForm.value.role = role;
    this.adminService.signup(this.signupForm.value,this.signupForm.value.img).subscribe(
      (response)=>{
        console.log("here after signup",response);
        
      }
    );
   
    Swal.fire({
      icon: 'error',
      title: 'Wellcome...',
      text: 'Registration with success',
      footer: '<a href="login">Why do I have this issue?</a>'
    })
    
   }

   //****////////////bouton cancel /////***** */ */
   cancel(){
    this.router.navigate([""]);
   }
   //****////////////bouton login /////***** */ */
   login(){
    this.router.navigate(["login"]);
   }


  //***conf image *///*/
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  
  }

}
