import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ICompany} from "../interfaces/ICompany";
import {Subject} from "rxjs";
import {IUser} from "../interfaces/IUser";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  server: string = environment.server + 'company';
  companySubject: Subject<boolean> = new Subject();
  constructor(private http: HttpClient) { }
  scanCompany(url: string) {
    return this.http.get(this.server + '/scan/' + encodeURIComponent(url));
  }
  addCompany(company: ICompany) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return this.http.post(this.server, {company}, {headers})
  }
}
