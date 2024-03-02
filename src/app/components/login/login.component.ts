import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  path : string;
  errorMsg  : any;
  pwdPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$";


  constructor(private formBuilder : FormBuilder , private router : Router , private clientService : ClientService) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:["",[Validators.required , Validators.email]],
      telephone:["",[Validators.required , Validators.minLength(8) , Validators.maxLength(8)]],
      password:["",[Validators.required , Validators.pattern(this.pwdPattern)]],

    })
  }

  //*** Bouton Login **////// */
  login(){
    this.clientService.login(this.loginForm.value).subscribe(
      (response) =>{
        console.log("Here response after login", response);
        if (response.msg != "2") {
          //message error
          this.errorMsg = "Please check Email/Pwd";
          
        }else{
          //// localStorage ////
          localStorage.setItem("connectedClients",response.patient.id);
          if (response.patient.role == "admin") {
            this.router.navigate(["search"]);
            
          }else {
            this.router.navigate([""]);
          }
        }
        
      }
    );
    Swal.fire({
      title: 'HELOW IN HAY SHOP',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

}
