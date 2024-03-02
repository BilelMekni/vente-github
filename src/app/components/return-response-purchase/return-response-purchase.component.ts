import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResponseService } from './../../services/response.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-response-purchase',
  templateUrl: './return-response-purchase.component.html',
  styleUrls: ['./return-response-purchase.component.css']
})
export class ReturnResponsePurchaseComponent implements OnInit {
returnForm : FormGroup;
return : any ={};
id : any;
reponse : any;
  constructor(private responseService : ResponseService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClients")
  this.responseService.getResponseById(this.id).subscribe(
    (data)=>{
      this.reponse = data.exams;
    }
  )
  }

  AddReturn(){
if (this.id) {
  this.return.ownersId = this.id;
  this.return.status = "Not Confirmed";
  this.responseService.addResponse(this.return).subscribe(
    (data)=>{
  this.reponse = data.message;
    }
  )
} 
  }

  ///*****Cancel Button *** */
  cancel(){
    this.router.navigate(["espaceOwner"]);
  }

}
