import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {
  contact: any=[];
  pageOfItems: Array<any>;


  constructor(private contactService:ContactService , private router : Router) { }

  ngOnInit() {
    this.contactService.getContact().subscribe(
      (response)=>{
        this.contact = response.contact;
        console.log("Here contact problem",this.contact);
        
      }
    )
  }
  /////// Pagination ////////////
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
