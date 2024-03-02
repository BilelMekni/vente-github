import { Component, OnInit } from '@angular/core';
import { ResponseService } from './../../services/response.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-response-table',
  templateUrl: './response-table.component.html',
  styleUrls: ['./response-table.component.css']
})
export class ResponseTableComponent implements OnInit {

  retour : any={};
  pageOfItems: Array<any>;
  constructor(private responseService : ResponseService , private router : Router) { }

  ngOnInit() {
    this.responseService.getAllResponse().subscribe(
      (data)=>{
        this.retour = data.examens;
        console.log("here response",this.retour);
        
      }
    )
    
  }


   //****module pagination //** */ */
 
onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
  }

  //**** Confirme Return Response /*** */ */
  confirmeResponse(id : any){
 this.responseService.confirmeResponse(id).subscribe(
  (data)=>{
    this.retour = data.message;
    this.responseService.getAllResponse().subscribe(
      (response)=>{
        this.retour = response.examens;
      }
    )
  }
  
 )
 this.router.navigate(["espaceOwner"]);
  }

  ///*** Update Response *//*/
  updateResponse(id:any){
    this.router.navigate([`updateResponses/${id}`]);
  }

}
