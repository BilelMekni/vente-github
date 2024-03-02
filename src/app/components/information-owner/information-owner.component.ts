import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-owner',
  templateUrl: './information-owner.component.html',
  styleUrls: ['./information-owner.component.css']
})
export class InformationOwnerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  ///***button add products ** */
  addProducts(){
   this.router.navigate(["addProduct"])
  }
  ////**button publications owner //* */
  publications(){
    this.router.navigate(["publicationsOwner"])
  }
  //** button return response /*** */ */
  returnResponse(){
  this.router.navigate(["returnResponse"]);
  }
  //*** button setting //* */
  setting(){
    this.router.navigate(["responseTable"]);
  }

}
