import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ICompany} from "../../../interfaces/ICompany";
import {FormBuilder, Validators} from "@angular/forms";
import {BrandAttribute, brandAttributesData} from "../../../interfaces/BrandAttribute";
import {BrandIdentity} from "../../../interfaces/BrandIdentity";
import {CompanyService} from "../../../services/company.service";
import {ToastrService} from "ngx-toastr";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-brand-identity',
  templateUrl: './brand-identity-dialog.component.html',
  styleUrls: ['./brand-identity-dialog.component.scss']
})
export class BrandIdentityDialogComponent implements OnInit {
  formNameSlogan = this.formBuilder.group({
    name: ['', Validators.required],
    slogan: ['']
  });
  toneOfVoice = this.formBuilder.group({
    tone: ['', Validators.required],
  });
  brandAttributes: BrandAttribute[] = brandAttributesData;
  selectedAttributes: BrandAttribute[] = [];
  loading = false;
  success = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICompany,
              private toastr: ToastrService,
              public dialogRef: DialogRef,
              private companyService: CompanyService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    // console.log('we are in init');
    this.formNameSlogan.setValue({
      name: this.data.brandIdentity.name,
      slogan: this.data.brandIdentity.slogan!
    });
    if(this.data.brandIdentity.brandAttributes.length) {
      this.data.brandIdentity.brandAttributes.forEach(string => {
        const match = this.brandAttributes.find(brandAttribute => brandAttribute.adjective === string);
        if (match) {
          this.selectedAttributes.push(match);
        }
      });
    }
    if(this.data.brandIdentity.toneOfVoice) {
      this.toneOfVoice.setValue({
        tone: this.data.brandIdentity.toneOfVoice,
      });
    }
  }
  save() {
    const brandIdentity: BrandIdentity = {
      name: this.formNameSlogan.value.name!,
      slogan: this.formNameSlogan.value.slogan!,
      toneOfVoice: this.toneOfVoice.value.tone!,
      brandAttributes: this.selectedAttributes.map(attribute => attribute.adjective)
    };
    this.data.brandIdentity = brandIdentity;
    this.companyService.addCompany(this.data).subscribe({next: (res) => {
         this.success = true;
        this.companyService.companySubject.next(true);
      }, error: (err) => {
        this.toastr.error('Something went wrong, please try again!')
        this.loading = false;
      }})
  }
  toggleAttributeSelection(attribute: BrandAttribute) {
    const index = this.selectedAttributes.findIndex(
      selected => selected.adjective === attribute.adjective
    );

    if (index >= 0) {
      // Already selected, remove it
      this.selectedAttributes.splice(index, 1);
    } else {
      // Not selected, add it
      this.selectedAttributes.push(attribute);
    }
  }
  isAttributeSelected(attribute: BrandAttribute): boolean {
    return this.selectedAttributes.some(
      selected => selected.adjective === attribute.adjective
    );
  }
  close() {
    this.dialogRef.close();
  }
}
