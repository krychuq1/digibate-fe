import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {BrandAttribute, brandAttributesData} from "../../../interfaces/BrandAttribute";
import {UserService} from "../../../services/user.service";
import {BrandIdentity} from "../../../interfaces/BrandIdentity";
@Component({
  selector: 'app-brand-identity',
  templateUrl: './brand-identity.component.html',
  styleUrls: ['./brand-identity.component.scss']
})
export class BrandIdentityComponent implements OnInit{
  brandAttributes: BrandAttribute[] = brandAttributesData

  selectedAttributes: BrandAttribute[] = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService)  { }

  ngOnInit(): void {
    const brandIdentity: BrandIdentity = this.userService.user.companies[0].brandIdentity;
    this.formGroup.setValue({
      name: brandIdentity.name,
      slogan: brandIdentity.slogan || '',
    });
    this.toneOfVoice.setValue({
      tone: brandIdentity.toneOfVoice,
    });
    //set values
    if(brandIdentity.brandAttributes.length) {
      brandIdentity.brandAttributes.forEach(string => {
        const match = this.brandAttributes.find(brandAttribute => brandAttribute.adjective === string);
        if (match) {
          this.selectedAttributes.push(match);
        }
      });
    }
   }

  formGroup = this.formBuilder.group({
    name: ['', Validators.required],
    slogan: ['']
  });
  toneOfVoice = this.formBuilder.group({
    tone: ['', Validators.required],
  });

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
}
