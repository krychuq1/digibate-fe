import {Injectable, OnInit, signal} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IUser} from "../interfaces/IUser";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: IUser;
  server: string = environment.server;
  userSubject: Subject<IUser> = new Subject();
  isLogged = false;
  constructor(private authService: SocialAuthService,
              private http: HttpClient, private router: Router) {

    this.authService.authState.subscribe((user) => {
      this.http.get(this.server + 'auth/google/', {
        params: {
          access_token: user.idToken
        }
      }).subscribe(
        {
          next: (r: any) => {
            localStorage.setItem('token', r.access_token)
            this.getProfile();
          },
          error: e => {
          }
        });
    });
    // check if token exists
    if(localStorage.getItem('token')) {
      this.getProfile();
    }
  }
  getProfile() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
    this.http.get(this.server + 'auth/userInfo/', {headers}).subscribe({next: (u: any) => {
      this.user = u;
      this.isLogged = true;
      this.userSubject.next(u);
      this.router.navigate(['/my-account'])
    }, error: e => {
        this.isLogged = false;
    }});
  }
  logout() {
    this.router.navigate(['/'])
    localStorage.removeItem('token');
    this.isLogged = false;
  }
}
