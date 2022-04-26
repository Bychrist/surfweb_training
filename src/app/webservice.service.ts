import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {
  _jsonURL = 'assets/countries.json'
  constructor(private httpClient: HttpClient) {

   }

  baseUrl = environment.baseUrl;
  emailUrl = environment.emailUrl;



  getAllCountries(): Observable<any> {
    return this.httpClient.get(this._jsonURL);

  }


  SendMail(data:any) {

    return this.httpClient.post(`${this.emailUrl}`, data, { responseType: 'text' });

  }





}
