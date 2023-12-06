import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/IUser";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent {
  constructor(public userService: UserService) {
  }
}
