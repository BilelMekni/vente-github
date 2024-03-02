import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdPublicationsService } from 'src/app/services/upd-publications.service';

@Component({
  selector: 'app-update-publications',
  templateUrl: './update-publications.component.html',
  styleUrls: ['./update-publications.component.css']
})
export class UpdatePublicationsComponent implements OnInit {

  updateForm: FormGroup;
  id: any;
  publish: any;
  constructor(private updPublicationsService: UpdPublicationsService, private router: Router,
    private activatedRoute: ActivatedRoute , private formBuilder :FormBuilder) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.updateForm = this.formBuilder.group({
      subject : ["",[Validators.required , Validators.minLength(2) , Validators.maxLength(50)]],
      description : ["",[Validators.required , Validators.minLength(2) , Validators.maxLength(500)]],
    }) 
    this.updPublicationsService.getpublishById(this.id).subscribe(
      (response) => {
        this.publish = response.controle;
        this.updateForm.patchValue(this.publish);
      }
    )
  }
  ///*** Button Update  //* */
  update() {
    this.updateForm.value._id = this.id;
    this.updPublicationsService.updatePub(this.updateForm.value).subscribe(
      (response) => {
        console.log("here publiction after update", response);
        this.router.navigate(["publicationsTable"]);

      }
    )

  }
  ///***  Button Cancel */
  cancel() {
    this.router.navigate(["publicationsTable"]);


  }

}
