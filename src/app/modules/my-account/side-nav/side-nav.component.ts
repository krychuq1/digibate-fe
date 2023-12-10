import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddCompanyComponent} from "../../../dialogs/add-company/add-company.component";
import {UserService} from "../../../services/user.service";
import {IUser} from "../../../interfaces/IUser";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input()
  url: string;
  constructor(public dialog: MatDialog, public userService: UserService) {

  }
  addCompany() {
    const dialogRef = this.dialog.open(AddCompanyComponent, {
      height: '500px',
      disableClose: true
    });
  }

  ngOnInit(): void {
    // this.addCompany();
  }
}
