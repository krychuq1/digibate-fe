import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StartComponent} from "../../dialogs/start/start.component";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(public dialog: MatDialog,
              public userService: UserService) {
  }
  start(): void {
    const dialogRef = this.dialog.open(StartComponent, {
      height: '500px',
      disableClose: true
    });
  }

}
