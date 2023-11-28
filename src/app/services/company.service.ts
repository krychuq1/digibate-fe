import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  server: string = environment.server + 'company';
  constructor(private http: HttpClient) { }
  scanCompany(url: string) {
    return this.http.get(this.server + '/scan/' + encodeURIComponent(url));
  }
}
