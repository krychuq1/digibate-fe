import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../../services/company.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SuccessComponent} from "./success/success.component";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {
  public loading: boolean = false;
  constructor(private companyService: CompanyService,
              public dialogRef: MatDialogRef<AddCompanyComponent>,
              public dialog: MatDialog,) {
  }
  urlForm = new FormGroup({
    url: new FormControl('', [Validators.required])
  });
  addCompany() {
    if (this.urlForm.valid) {
      this.loading = true;
      const url: string = this.urlForm.getRawValue().url!;
      this.companyService.scanCompany(url).subscribe({next: (response => {
        this.loading = false;
        this.close();
        this.dialog.open(SuccessComponent, {data: response});
        }),
        error: (err) => {

        }});
    }
  }
  close() {
    this.dialogRef.close();
  }
}
