import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-autres-details',
  templateUrl: './autres-details.component.html',
  styleUrls: ['./autres-details.component.css']
})
export class AutresDetailsComponent implements OnInit {
  @Input() inputdetails : any;

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
