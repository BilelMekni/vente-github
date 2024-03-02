import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseService } from 'src/app/services/response.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-response-confirme',
  templateUrl: './response-confirme.component.html',
  styleUrls: ['./response-confirme.component.css']
})
export class ResponseConfirmeComponent implements OnInit {
  id :any;
  see : any;
  pageOfItems: Array<any>;

  constructor(private responseService : ResponseService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedClients");
    this.responseService.getResponseConfirme().subscribe(
      (data)=>{
        this.see = data.pubs;
        console.log("here response confirme",this.see);
        
      }
    )
  }
  acceptResponse(){
    Swal.fire({
      title: "Wellcom To Accept Response",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    })
   this.router.navigate(["espaceClient"]);
  }

  deleteResponse(id:any){
    this.responseService.deleteReturnResponse(id).subscribe(
      (response)=>{
        console.log("here return response after delete",response);
        this.responseService.getAllResponse().subscribe(
          (data)=>{
            this.see = data.examens;
          }
        )
      }
    
    )
    
    
    
  }

   //***pagination //*** */ */
   onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }
    //****  Button Cancel //** */ */
    CancelResponse(){
    this.router.navigate(["espaceClient"]);
    }

}
