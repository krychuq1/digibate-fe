import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-continue-email',
  templateUrl: './continue-email.component.html',
  styleUrls: ['./continue-email.component.scss']
})
export class ContinueEmailComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  back() {}
}
