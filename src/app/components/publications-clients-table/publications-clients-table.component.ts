import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PubliciteService } from 'src/app/services/publicite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publications-clients-table',
  templateUrl: './publications-clients-table.component.html',
  styleUrls: ['./publications-clients-table.component.css']
})
export class PublicationsClientsTableComponent implements OnInit {
  public : any={};
  pageOfItems: Array<any>;

  constructor(private publiciteService : PubliciteService , private router : Router) { }

  ngOnInit() {
    this.publiciteService.getAllPublications().subscribe(
      (data)=>{
        this.public = data.publication;
        console.log("Here publications clients",this.public);
        
      }
    )

  }
  ///** Button Delete Publications Clients */
 deletePublications(id :any){
  this.publiciteService.deletePublications(id).subscribe(
    (response)=>{
      console.log("Here publications clients after delete",response);
      this.publiciteService.getAllPublications().subscribe(
        (response)=>{
          this.public = response.publication;
        }
      )
      
    }
  )
  Swal.fire({
    title: 'Delete Publications Clients!',
    text: 'Delete With Success.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
 }

 //**** Button Update Publication Client */
 updatePublications(id : any){
  this.router.navigate([`updatePublicationClient/${id}`]);
 }

  /////// Pagination ///////////////
onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
  }


}
