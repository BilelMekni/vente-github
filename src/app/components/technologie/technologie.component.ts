import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologie',
  templateUrl: './technologie.component.html',
  styleUrls: ['./technologie.component.css']
})
export class TechnologieComponent implements OnInit {
@Input() inputTtechn:any;

  constructor() { }

  ngOnInit() {
  }
  priceStyle(price1 : any , price2: any){
    let result;
    if (price1 > price2) {
      result = 1;
    } else if (price1 < price2) {
      result = -1;
    }else {
      result = 0;
    }
    return result;
  }
    
  
      
    }

  


