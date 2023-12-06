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
  public expression = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  public error: boolean = false;
  constructor(private companyService: CompanyService,
              public dialogRef: MatDialogRef<AddCompanyComponent>,
              public dialog: MatDialog,) {
  }
  urlForm = new FormGroup({
    url: new FormControl('', [Validators.required,
      Validators.pattern(this.expression)])
  });
  addCompany() {
    if (this.urlForm.valid) {
      this.loading = true;
      const url: string = this.urlForm.getRawValue().url!;
      this.companyService.scanCompany(url).subscribe({next: (response => {
        this.loading = false;
        const data = {
          response,
          header: '🎉 Success! Here\'s the Scoop! 🌐'
        }
        this.openSuccess(data)
        }),
        error: (err) => {
        this.error = true;
        this.loading = false;
        }});
    }
  }
  close() {
    this.dialogRef.close();
  }
  openSuccess(response: any) {
    this.close();
    this.dialog.open(SuccessComponent, {data: response});
  }
}
