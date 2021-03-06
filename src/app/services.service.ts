import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
url_root:String ="http://mldataspringbootaws-env.eba-hx4pdgt6.us-east-2.elasticbeanstalk.com";
  constructor(private http: HttpClient ) { }
  postEmail(firstname: string, lastname: string, email: string, need: string, message: string): Observable<any> {
    return this.http.post<any>(this.url_root+"/api/contact", {
      firstname,
      lastname,
      email,
      need,
      message
    })
  }
  postOpinion(message: string, sentiment: string): Observable<any> {
    return this.http.post<any>(this.url_root+"/api/opinion", {
      message,
      sentiment
    })
  }
}
