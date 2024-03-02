import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  solde : any =[
    {title:"White Evening Dress" , price1:"125.000 DT" , price2:"140.000 DT" , view:"View Detail" , add:"Add To Car" , image:"assets/img/product-1.jpg" },
    {title:"Small Shirt" , price1:"100.000 DT" , price2:"123.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/product-2.jpg" },
    {title:"Cook Man Shirt" , price1:"210.00 DT" , price2:"250.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/product-3.jpg" },
    {title:"Black Evening Dress" , price1:"130.000 DT" , price2:"150.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/product-4.jpg" },
    {title:"Sweater Girl" , price1:"100.000 DT" , price2:"150.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/product-5.jpg" },
    {title:"Black Man Suit" , price1:"300.000 DT" , price2:"400.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/product-6.jpg" },
    {title:"Woman Jacket" , price1:"100.000 DT" , price2:"150.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/product-7.jpg" },
    {title:"Pentallon Shirt" , price1:"100.000 DT" , price2:"130.000 DT" , view:"View Detail" , add:"Add To Cart" , image:"assets/img/product-8.jpg" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
