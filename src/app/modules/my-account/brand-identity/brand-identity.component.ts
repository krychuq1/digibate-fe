import {Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {BrandAttribute} from "../../../interfaces/BrandAttribute";
import {UserService} from "../../../services/user.service";
import {BrandIdentity} from "../../../interfaces/BrandIdentity";
@Component({
  selector: 'app-brand-identity',
  templateUrl: './brand-identity.component.html',
  styleUrls: ['./brand-identity.component.scss']
})
export class BrandIdentityComponent implements OnInit{
  brandAttributes: BrandAttribute[] = [
    { adjective: 'active', icon: 'directions_run' },
    { adjective: 'adventurous', icon: 'explore' },
    { adjective: 'ambitious', icon: 'show_chart' },
    { adjective: 'approachable', icon: 'forum' },
    { adjective: 'authentic', icon: 'verified' },
    { adjective: 'bohemian', icon: 'brush' },
    { adjective: 'bold', icon: 'format_bold' },
    { adjective: 'brave', icon: 'shield' },
    { adjective: 'bright', icon: 'wb_sunny' },
    { adjective: 'bubbly', icon: 'mood' },
    { adjective: 'calm', icon: 'spa' },
    { adjective: 'candid',icon: 'photo_camera' },
    { adjective: 'carefree',icon: 'bubble_chart' },
    { adjective: 'careful', icon: 'security' },
    { adjective: 'innovative', icon: 'lightbulb_outline' },
    { adjective: 'dynamic', icon: 'bolt' },
    { adjective: 'sophisticated', icon: 'emoji_objects' },
    { adjective: 'friendly', icon: 'pets' },
    { adjective: 'energetic', icon: 'battery_charging_full' },
    { adjective: 'inspiring', icon: 'emoji_events' },
    { adjective: 'playful', icon: 'sports_esports' },
    { adjective: 'intuitive', icon: 'fingerprint' },
    { adjective: 'professional', icon: 'work_outline' },
    { adjective: 'quirky', icon: 'mood_bad' },
    { adjective: 'reliable', icon: 'verified_user' },
    { adjective: 'sleek', icon: 'drag_indicator' },
    { adjective: 'stylish', icon: 'style' },
    { adjective: 'trendy', icon: 'whatshot' },
    { adjective: 'trustworthy', icon: 'lock_outline' },
    { adjective: 'visionary', icon: 'remove_red_eye' },
    { adjective: 'welcoming', icon: 'home' },
    { adjective: 'whimsical', icon: 'waving_hand' },
    { adjective: 'youthful', icon: 'sports_soccer' },
    { adjective: 'zen', icon: 'spa' }
  ];

  selectedAttributes: BrandAttribute[] = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService)  { }

  ngOnInit(): void {
    const brandIdentity: BrandIdentity = this.userService.user.companies[0].brandIdentity;
    this.formGroup.setValue({
      name: brandIdentity.name,
      slogan: ''
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
