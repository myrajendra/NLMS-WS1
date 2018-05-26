import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private http: HttpClient) { }

  findAll(value: any): Observable<any> {
    return this.http.get(environment.ENDPOINT_URL + "beneficiaries" + "?size=" + value.pageSize + "&page=" + value.pageIndex);
  }
}
