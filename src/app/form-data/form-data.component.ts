import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  checks: boolean = false;
  blink(event:any){
    if(event.target.checked== true){
      this.checks=true;
    }else{
      this.checks=false;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  getValues(val: any){
    console.warn(val)
  }
}
