import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  informatique : any=[
    {title:"Laptop Asus I5" , price1:"2000.000 DT" , price2:"2300.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/laptop.jpg"},
    {title:"Lenovo Desktop PC" , price1:"1750.000 DT" , price2:"1900.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/bb.jpg"},
    {title:"Smartphone Sedmi Note 12 (6G 128G)" , price1:"800.000 DT" , price2:"999.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/redmi.jpg"},
    {title:"Redmi Earphone" , price1:"110.000 DT" , price2:"150.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/ec.jpg"},
    {title:"Mouse" , price1:"20.000 DT" , price2:"30.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/mmouse.jpg"},
    {title:"Samsung Tablet" , price1:"350.000 DT " , price2:"450.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/tt.jpg"},
    {title:"TCL Television 50" , price1:"1850.000 DT" , price2:"2250.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/tcl50.jpg"},
    {title:"Refregirateur Samsung" , price1:"2010.000 DT" , price2:"2250.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/refr.jpg"},
    {title:"SmartWatch" , price1:"210.000 DT" , price2:"250.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/smart.jpg"},
    {title:"WristWatch" , price1:"100.000 DT" , price2:"150.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/montre.jpg"},
    {title:"Washing Machine" , price1:"700.000 DT" , price2:"850.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/ma.jpg"},
    {title:"Air Conditioner" , price1:"20100.000 DT" , price2:"2300.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/air.webp"},

  ]

  constructor() { }

  ngOnInit() {
  }

}
