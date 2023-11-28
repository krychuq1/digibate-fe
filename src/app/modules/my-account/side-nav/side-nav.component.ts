import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddCompanyComponent} from "../../../dialogs/add-company/add-company.component";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  constructor(public dialog: MatDialog) {
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
