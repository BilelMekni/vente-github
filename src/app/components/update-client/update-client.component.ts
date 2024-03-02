import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  updateForm : FormGroup;
  id :any;
  patient : any;

  constructor(private clientService : ClientService , private router : Router,
    private activatedRoute : ActivatedRoute , private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.updateForm = this.formBuilder.group({
      firstName :["",[Validators.required , Validators.minLength(3),Validators.maxLength(20)]],
      lastName :["",[Validators.required , Validators.minLength(3),Validators.maxLength(20)]],
      telephone :["",[Validators.required , Validators.minLength(8),Validators.maxLength(8)]],
      adresse :["",[Validators.required , Validators.minLength(3),Validators.maxLength(50)]],

    })
    this.clientService.getClientById(this.id).subscribe(
      (response)=>{
        this.patient = response.client;
        this.updateForm.patchValue(this.patient);
        
      }
    )
  }
  ///** Button Update Client **// */
  updateClients(){
   this.updateForm.value._id = this.id ;
    console.log("here update from clients",this.updateForm.value);
    this.clientService.updateClient(this.updateForm.value).subscribe(
      (data)=>{
        console.log("here data update clients",data);
        this.router.navigate(["clientTable"]);
        
      }
    )
    
  }
  ///** Button Cancel //** */ */
  cancel(){
    this.router.navigate(["clientTable"]);

  }

}
