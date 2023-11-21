import {Injectable, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  user: SocialUser | null = null;
  constructor(private authService: SocialAuthService) {

    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }
}
