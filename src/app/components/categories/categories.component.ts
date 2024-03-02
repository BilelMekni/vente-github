import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  principales: any =[
    {title:"20 Products", description:"Men's dresses" , image:"assets/img/cat-1.jpg"},
    {title:"30 Products", description:"Women's dresses" , image:"assets/img/cat-2.jpg"},
    {title:"40 Products", description:"Baby's dresses" , image:"assets/img/cat-3.jpg"},
    {title:"25 Products", description:"Accessoires" , image:"assets/img/cat-4.jpg"},
    {title:"15 Products", description:"Bags" , image:"assets/img/cat-5.jpg"},
    {title:"50 Products", description:"Shoes" , image:"assets/img/cat-6.jpg"},

  ]

  constructor() { }

  ngOnInit() {
  }

}
