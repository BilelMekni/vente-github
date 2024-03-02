import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {
  searchFoot : FormGroup;

  constructor(private formBuilder : FormBuilder , private router : Router,
    private weatherService : WeatherService) { }

  ngOnInit() {
    this.searchFoot = this.formBuilder.group({
      club :["",[Validators.required]]
    })
  }
  searchFoots(){
    this.weatherService.searchFoot(this.searchFoot.value).subscribe()
  }

}
