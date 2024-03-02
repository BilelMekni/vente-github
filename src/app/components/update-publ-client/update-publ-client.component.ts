import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdPubliClientService } from 'src/app/services/upd-publi-client.service';

@Component({
  selector: 'app-update-publ-client',
  templateUrl: './update-publ-client.component.html',
  styleUrls: ['./update-publ-client.component.css']
})
export class UpdatePublClientComponent implements OnInit {
updateForm : FormGroup;
id : any;
controle : any ;
  constructor(private updPubliClientService : UpdPubliClientService , private router  : Router,
    private formBuilder : FormBuilder , private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.updateForm = this.formBuilder.group({
      title : ["",[Validators.required , Validators.maxLength(20) , Validators.minLength(3)]],
      description : ["",[Validators.required , Validators.maxLength(20) , Validators.minLength(3)]],

    })
    this.updPubliClientService.getpublClientById(this.id).subscribe(
      (data)=>{
        console.log("here update publications clients by id",data);       
       this.controle = data.controle;
       this.updateForm.patchValue(this.controle);
      }
    )
  }
  ///** Button Update /// */
  updatePubl(){
    this.updateForm.value._id = this.id;
    console.log("here update clien from client",this.updateForm.value);
    this.updPubliClientService.updatePubClient(this.updateForm.value).subscribe(
      (data)=>{
        console.log("here data publications clients by id",data);
        this.router.navigate(["publicationsClientsTable"]);
        
      }
    )
    
  }
  ///***  Button Cancel */
  cancel(){
    this.router.navigate(["publicationsClientsTable"]);
  }

}
