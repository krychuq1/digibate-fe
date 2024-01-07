import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WaitingListService {
  server: string = environment.server;
  constructor(private http: HttpClient) { }
  addToWaitingList(email: string) {
    return this.http.post(this.server + 'waiting-list/', {email});
  }

}
