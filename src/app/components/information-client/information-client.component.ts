import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-client',
  templateUrl: './information-client.component.html',
  styleUrls: ['./information-client.component.css']
})
export class InformationClientComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  //***/button publications /***/
  publicationsClients() {
    this.router.navigate(["publicationsClients"]);

  }
  //***/button by products /***/
  buyProduct() {
    this.router.navigate(["productsConfirme"])
  }
  //***/button by response confirme /***/
  responseConfirme() {
    this.router.navigate(["responseConfirme"]);
  }
    //***/button by setting /***/
    setting(){
      this.router.navigate(["publicationsClientsTable"]);
    }


}
