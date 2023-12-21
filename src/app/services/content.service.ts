import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  server: string = environment.server;

  constructor(private http: HttpClient) {
  }

  createContent() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    return this.http.post(this.server + 'content/', {}, {headers});
  }
}
