import { Component, OnInit } from '@angular/core';
import { Shopping } from './../../interfaces/shopping';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent implements OnInit {
  readonly baseUrl = 'https://angular.io/assets/img/a.png';

  shopping: Shopping = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/a.png`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };

  constructor() { }

  ngOnInit() {
  }

}
