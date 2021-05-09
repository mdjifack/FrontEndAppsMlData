import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

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