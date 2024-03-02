import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import { MustMatch } from 'src/app/validators/mustMatch';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-owner',
  templateUrl: './signup-owner.component.html',
  styleUrls: ['./signup-owner.component.css']
})
export class SignupOwnerComponent implements OnInit {
  signupForm:FormGroup;
  imagePreview: any;
  path : string;
  pwdPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$";
  

  constructor(private formBuilder : FormBuilder , private router : Router ,
    private ownerService : OwnerService) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName:["",[Validators.required ,  Validators.minLength(3) , Validators.maxLength(20)]],
      lastName:["",[Validators.required , Validators.minLength(3), Validators.maxLength(20)]],
      date:["",[Validators.required]],
      email:["",[Validators.required , Validators.email]],
      telephone:["",[Validators.required , Validators.minLength(8) , Validators.maxLength(8)]],
      adresse:["",[Validators.required , Validators.minLength(3), Validators.maxLength(50)]],
      matricule:["",[Validators.required , Validators.minLength(8) , Validators.maxLength(20)]],
      password:["",[Validators.required , Validators.pattern(this.pwdPattern)]],
      confPassword:[""],
      gender:[""],
      img:[""],
    },{
      validators:MustMatch("password","confPassword")
    }
    )
  }

  ///***//////////////// Bouton Signup Owner ///*************/////////////////// */ */
  signup(){
    let patient = this.signupForm.value;
    patient.role = "owners";
    this.ownerService.signup(this.signupForm.value,this.signupForm.value.img).subscribe(
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
   //////////*****bouton cancel /////////////// */
   cancel(){
      this.router.navigate(['']);
   }
    //*****////bouton login /////////////// */
    login(){
      this.router.navigate(['login'])
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
