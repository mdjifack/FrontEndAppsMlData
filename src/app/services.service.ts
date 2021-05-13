import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient ) { }
  postEmail(firstname: string, lastname: string, email: string, need: string, message: string): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/contact", {
      firstname,
      lastname,
      email,
      need,
      message
    })
  }
  postOpinion(message: string, sentiment: string): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/opinion", {
      message,
      sentiment
    })
  }
}
