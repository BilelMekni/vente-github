import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  details : any=[
    {title :"VOITURE IZIS TWO" , price1:"45.000.000 DT" , price2:"50.000.000 DT" , images:"assets/img/v1.jpg"},
    {title :"LOCATION DONGFENG" , price1:"250.000.000 DT" , price2:"300.000.000 DT" , images:"assets/img/v2.png"},
    {title :"LA VOLKSWAGEN POLO VEUT-ELLE REMPLACER LA GOLF" , price1:"45.000.000 DT" , price2:"60.000.000 DT" , images:"assets/img/v3.webp"},
    {title :"VOITURE BMW neuves" , price1:"160.000.000 DT" , price2:"200.000.000 DT" , images:"assets/img/V4.jpg"},
    {title :"ZIMOTA MOTOR" , price1:"2000.000 DT" , price2:"2100.000 DT" , images:"assets/img/zimota.jpg"},
    {title :"SCOOTER SUZUKI BURGMAN STREET UB125-BLACK" , price1:"2500.000 DT" , price2:"2600.000 DT" , images:"assets/img/SUZUKI.jpg"},
    {title :"Scooter Électrique E-RIDER E-CLASSIC" , price1:"1200.000 DT" , price2:"1500.000 DT" , images:"assets/img/scooter.webp"},
    {title :"MOTO ET SCOOTER" , price1:"1700.000 DT" , price2:"1800.000 DT" , images:"assets/img/moto.webp"},
    {title :"TROTTINETTE ELECTRIQUE APRILLA SMART" , price1:"700.000 DT" , price2:"900.000 DT" , images:"assets/img/tr1.jpg"},
    {title :"TROTTINETTE 3 ROUES" , price1:"950.000 DT" , price2:"1200.000 DT" , images:"assets/img/TR2.webp"},
    {title :"TROTTINETTE POUR ENFANTS" , price1:"600.000 DT" , price2:"750.000 DT" , images:"assets/img/tr3.jpg"},
    {title :"XIAOMI ELECTRIC SCOOTER 3 LITE" , price1:"950.000 DT" , price2:"1000.000 DT" , images:"assets/img/TR5.jpg"},
    {title :"BICYCLETTE RODEO 6020-FB STAR WARS" , price1:"1200.000 DT" , price2:"1600.000 DT" , images:"assets/img/b1.webp"},
    {title :"BICYCLETTE ENFANTS 20" , price1:"1400.000 DT" , price2:"1400.000 DT" , images:"assets/img/B2.jpg"},
    {title :"MI SMART ELECTRIC FOLDING BIKE" , price1:"1200.000 DT" , price2:"1300.000 DT" , images:"assets/img/B3.jpg"},
    {title :"RIVERSIDE HOMME 26" , price1:"800.000 DT" , price2:"950.000 DT" , images:"assets/img/B4.jpg"},

  ]

  constructor() { }

  ngOnInit() {
  }
  

}
