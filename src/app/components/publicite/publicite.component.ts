import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publicite',
  templateUrl: './publicite.component.html',
  styleUrls: ['./publicite.component.css']
})
export class PubliciteComponent implements OnInit {

  @Input() inputPub:any;

  constructor() { }

  ngOnInit() {
  }

}
