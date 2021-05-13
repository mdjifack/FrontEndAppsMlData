import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  /** enable the submit button to be active
   *  after the privacy checkbox button was clicked*/
  checks: boolean = false;
  blink(event: any) {
    if (event.target.checked == true) {
      this.checks = true;
    } else {
      this.checks = false;
    }
  }

  opinionForm: FormGroup;

  constructor(private sercices: ServicesService, private fb: FormBuilder,private router: Router){
    this.opinionForm = this.fb.group({
      message: ['', [Validators.required, Validators.maxLength(300)]],
      sentiment: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

   /**
   * get eht form controls
   */
  get f() {
    return this.opinionForm?.controls;
  }
  
  /**display the form button on console */
  getValues() {
    let val = this.opinionForm.value;
    console.warn(this.opinionForm)

    if(this.opinionForm.valid){
    this.sercices.postOpinion(val.message, val.sentiment).subscribe(
      data => {
       this.router.navigate(['/saved']);
      },
      err => {
          console.log(err)
          alert("error")
      }
    );
    }
  } 
}
