import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationsService } from 'src/app/services/publications.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publications-table',
  templateUrl: './publications-table.component.html',
  styleUrls: ['./publications-table.component.css']
})
export class PublicationsTableComponent implements OnInit {
publications : any={};
pageOfItems: Array<any>;

  constructor(private publicationsService : PublicationsService , private router : Router) { }

  ngOnInit() {
    this.publicationsService.getAllPublications().subscribe(
      (data)=>{
        this.publications = data.publications;
        console.log("Here publications owners",this.publications);
        
      }
    )
  }
///// Confirmation Publications Owners By Admin
confirmePublications(id:any){
  this.publicationsService.confirmePublications(id).subscribe(
    (data)=>{
      this.publications = data.message;
      this.publicationsService.getAllPublications().subscribe(
        (data)=>{
          this.publications = data.publications;
        }
      )
    }
  )
  this.router.navigate(["admin"]);
}
//*** Button Delete Publications Owners */
deletePublications(id:any){
  this.publicationsService.deletePublications(id).subscribe(
    (data)=>{
      console.log("Here publications after delete",data);
      this.publicationsService.getAllPublications().subscribe(
        (data)=>{
          this.publications = data.publications;
        }
      )
      
      
    }
  )
  Swal.fire({
    title: 'Delete Publications Owners!',
    text: 'Delete With Success.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}

////****  Button Update Publications ///* */
updatePublication(id : any){
  this.router.navigate([`updatePublications/${id}`]);
}

/////// Pagination ///////////////
onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
  }

}

