import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-soldes',
  templateUrl: './soldes.component.html',
  styleUrls: ['./soldes.component.css']
})
export class SoldesComponent implements OnInit {
  @Input() inputSol:any;

  constructor() { }

  ngOnInit() {
  }
  priceColor(price1: any, price2 : any){
    let result = "";
    if (price1 > price2) {
      result = "red";
      
    }else if (price1 < price2) {
      result = "green";
    } else{
      result ="blue";
    }
    return result;
  }

}
