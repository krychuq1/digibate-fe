import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {DialogRef} from "@angular/cdk/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../../../services/company.service";
import {ICompany} from "../../../interfaces/ICompany";
import { ToastrService } from 'ngx-toastr';
import {BrandIdentityDialogComponent} from "../brand-identity-dialog/brand-identity-dialog.component";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit{
  stepTwo = false;
  loading = false;
  success = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog,
              public dialogRef: DialogRef, public companyService: CompanyService,
              private toastr: ToastrService) {

  }
  companyForm = new FormGroup({
    companyDescription: new FormControl('', [Validators.required]),
    productDescription: new FormControl('', [Validators.required]),
    fullBusinessName: new FormControl('', [Validators.required]),
    businessName: new FormControl('', [Validators.required]),
    industry: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {
    console.log(this.data.response);
    if(this.data.response.content) {
      this.companyForm.setValue({
        companyDescription: this.data.response.content.response.descriptionOfBusiness,
        productDescription: this.data.response.content.response.descriptionOfProducts,
        fullBusinessName: this.data.response.content.response.businessInformation.fullBusinessName,
        businessName: this.data.response.content.response.businessInformation.businessName,
        industry: this.data.response.content.response.businessInformation.industry,
        email: this.data.response.content.response.businessInformation.email,
        address: this.data.response.content.response.businessInformation.address,
      })
    }
  }
  close() {
    this.dialogRef.close();
  }
  addCompany() {
    this.loading = true;
    // const company: ICompany = {
    //   brandIdentity: {
    //     name: this.data.response.content.response.businessInformation.businessName,
    //     brandAttributes: this.data.response.content.response.brandAttributes,
    //     toneOfVoice: this.data.response.content.response.toneOfVoice
    //   },
    //   address: this.companyForm.get('address')?.value || "",
    //   businessName: this.companyForm.get('businessName')?.value || "",
    //   companyDescription: this.companyForm.get('companyDescription')?.value || "",
    //   email: this.companyForm.get('email')?.value || "",
    //   fullBusinessName: this.companyForm.get('fullBusinessName')?.value || "",
    //   industry: this.companyForm.get('industry')?.value || "",
    //   productDescription: this.companyForm.get('productDescription')?.value || ""
    // };
    // this.companyService.addCompany(company).subscribe({next: (res) => {
    //      this.success = true;
    //     this.companyService.companySubject.next(true);
    //   }, error: (err) => {
    //     this.toastr.error('Something went wrong, please try again!')
    //     this.loading = false;
    //   }})
  }
  openBrandIdentity() {
    const company: ICompany = {
      brandIdentity: {
        name: this.data.response.content.response.businessInformation.businessName,
        brandAttributes: this.data.response.content.response.brandAttributes,
        toneOfVoice: this.data.response.content.response.toneOfVoice,
        slogan: this.data.response.content.response.slogan
      },
      address: this.companyForm.get('address')?.value || "",
      businessName: this.companyForm.get('businessName')?.value || "",
      companyDescription: this.companyForm.get('companyDescription')?.value || "",
      email: this.companyForm.get('email')?.value || "",
      fullBusinessName: this.companyForm.get('fullBusinessName')?.value || "",
      industry: this.companyForm.get('industry')?.value || "",
      productDescription: this.companyForm.get('productDescription')?.value || ""
    };
    this.close();

    this.dialog.open(BrandIdentityDialogComponent, {
      width: '1000px',
      height: '700px',
      data: company,
      autoFocus: false,
    });
  }
}
