import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prinicipale',
  templateUrl: './prinicipale.component.html',
  styleUrls: ['./prinicipale.component.css']
})
export class PrinicipaleComponent implements OnInit {
  @Input() inputPrin : any;

  constructor() { }

  ngOnInit() {
  }

}
