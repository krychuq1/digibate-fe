import { Component } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
  constructor(public userService: UserService) {
  }
  logout() {
    this.userService.logout();
  }
}
