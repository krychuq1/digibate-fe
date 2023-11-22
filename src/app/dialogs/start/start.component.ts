import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ContinueEmailComponent} from "../continue-email/continue-email.component";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/IUser";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<StartComponent>,
              public dialog: MatDialog,
              private userService: UserService) {
  }

  continue() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(ContinueEmailComponent, {
    });
  }
  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.userService.userSubject.subscribe({next: (u: IUser) => {
      this.close();
      }})
  }
}
