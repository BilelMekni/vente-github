import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  publicites : any=[
    {title1:"20% off the all order" , title2:"Winter Collection" ,button:"Shop Now", image:"assets/img/offer-1.png" },
    {title1:"10% off the all order" , title2:"Spring Collection" ,button:"Shop Now", image:"assets/img/offer-2.png" },
    {title1:"15% off the all order" , title2:"Summer Collection" ,button:"Shop Now", image:"assets/img/img1.gif" },
    {title1:"20% off the all order" , title2:"Autumn Collection" ,button:"Shop Now", image:"assets/img/img2.jpg" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
