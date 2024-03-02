import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  searchWeather : FormGroup;
  weatherresult : any;
  constructor(private formBuilder : FormBuilder , private router : Router,
    private weatherService : WeatherService) { }

  ngOnInit() {
    this.searchWeather = this.formBuilder.group({
      city:["",[Validators.required]]
    })
  }
  searchWeathers(){
 this.weatherService.searchWeather(this.searchWeather.value).subscribe(
  (data)=>{
    console.log("here weather api front",data.result);
    this.weatherresult =data.result;
    
  }
 )
  }

}
