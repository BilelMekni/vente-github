import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/services/owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-owner-table',
  templateUrl: './owner-table.component.html',
  styleUrls: ['./owner-table.component.css']
})
export class OwnerTableComponent implements OnInit {
  awner: any = {};
  pageOfItems: Array<any>;

  constructor(private ownerService: OwnerService, private router: Router) { }

  ngOnInit() {
    this.ownerService.getAllOwner().subscribe(
      (response) => {
        this.awner = response.owner;
      }
    )
  }
  /////// Pagination ///////
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  /////// Delete Owners ///////
  deleteOwners(id: any) {
    this.ownerService.deleteOwners(id).subscribe(
      (data) => {
        console.log("here admin after delete", data);
        this.ownerService.getAllOwner().subscribe(
          (response) => {
            this.awner = response.owner;
          }
        )
      }

    )
    Swal.fire({
      title: 'Delete Owner!',
      text: 'Delete With Success.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })

  }
  ///** Update Owners //** */ */
  updateOwners(id :any){
    this.router.navigate([`updateOwners/${id}`]);

  }

}
