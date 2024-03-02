import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/services/purchase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-purchase-table',
  templateUrl: './purchase-table.component.html',
  styleUrls: ['./purchase-table.component.css']
})
export class PurchaseTableComponent implements OnInit {
  purchase: any = {};
  pageOfItems: Array<any>;


  constructor(private purchaseService: PurchaseService, private router: Router) { }

  ngOnInit() {
    this.purchaseService.getAllPurchase().subscribe(
      (data) => {
        this.purchase = data.pure;
        console.log("Here purchase products", this.purchase);

      }
    )
  }
  //////Confirme Purchase Clients By Admin /////
  confirmePurchase(id: any) {
    this.purchaseService.confirmePurchase(id).subscribe(
      (response) => {
        this.purchase = response.message
        this.purchaseService.getAllPurchase().subscribe(
          (response) => {
            this.purchase = response.pure;
          }
        )

      }
    )
    this.router.navigate(["admin"])
  }
  //////Delete Purchase Clients /////
  deletePurchase(id: any) {
    this.purchaseService.deletePurchase(id).subscribe(
      (data) => {
        console.log("Here purchase delete", data);
        this.purchaseService.getAllPurchase().subscribe(
          (response) => {
            this.purchase = response.pure;
          }
        )
      }

    )
    Swal.fire({
      title: 'Delete Purchase Clients!',
      text: 'Delete With Success.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })

  }

  //**  Button Update Purchase //**  */ */
  updatePurchase(id: any) {
    this.router.navigate([`updatePurchase/${id}`]);

  }
  //Pagination//
  //////Pagination /////
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;

  }
}