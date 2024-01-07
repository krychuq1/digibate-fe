import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddCompanyComponent} from "../../../dialogs/add-company/add-company.component";
import {UserService} from "../../../services/user.service";
import {IUser} from "../../../interfaces/IUser";
import {ContentService} from "../../../services/content.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input()
  url: string;
  @Output() loadingEmitter = new EventEmitter<boolean>();
  showNav = false;
  constructor(public dialog: MatDialog,
              public contentService: ContentService,
              public userService: UserService,
              private toastr: ToastrService) {

  }
  addCompany() {
    const dialogRef = this.dialog.open(AddCompanyComponent, {
      height: '500px',
      disableClose: true
    });
  }
  createContent() {
    this.loadingEmitter.emit(true);
    this.contentService.createContent().subscribe({next: (response) => {
      this.toastr.success('Content mailed successfully');
      this.loadingEmitter.emit(false);
      }, error: (error) => {
        this.loadingEmitter.emit(false);
        this.toastr.error('Something went wrong');
    }});
  }
  ngOnInit(): void {
    // this.addCompany();
  }
  displayNav() {
    this.showNav = true;
  }

  hideNav() {
    this.showNav = false;
  }
}
