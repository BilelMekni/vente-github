import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {
  user : any={};
  pageOfItems: Array<any>;



  constructor(private clientService : ClientService , private router : Router) { }

  ngOnInit() {
    this.clientService.getAllClient().subscribe(
      (response)=>{
        this.user = response.client;
      }
    )
  }
  ////// Pagination///////////
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }
    ////// Button Delete Clients///////////
    deleteClient(id:any){
      this.clientService.deleteClient(id).subscribe(
        (data)=>{
          console.log("Here Clients after delete",data);
          this.clientService.getAllClient().subscribe(
            (data)=>{
              this.user = data.client;
            }
          )
          
        }
      )
      Swal.fire({
        title: 'Delete Clients!',
        text: 'Delete With Success.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })

    }

    //*** Update Cients //* */
    updateClients(id : any){
     this.router.navigate([`updateClients/${id}`]);
    }

}
