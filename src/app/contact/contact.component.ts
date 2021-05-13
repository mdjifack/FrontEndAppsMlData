import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
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

  contactForm: FormGroup;

  constructor(private sercices: ServicesService, private fb: FormBuilder,private router: Router){
    this.contactForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.maxLength(40)]],
      lastname: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.maxLength(40),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      need: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.maxLength(300)]],
    });
  }

  ngOnInit(): void {
  }
  /**
   * get eht form controls
   */
  get f() {
    return this.contactForm?.controls;
  }
  /**display the form button on console */
  getValues() {
    let val = this.contactForm.value;
    console.warn(this.contactForm)

    if(this.contactForm.valid){
    this.sercices.postEmail(val.firstname, val.lastname, val.email, val.need, val.message).subscribe(
      data => {
       this.router.navigate(['/home']);
      },
      err => {
          console.log(err)
          alert("error")
      }
    );
    }
  } 
}