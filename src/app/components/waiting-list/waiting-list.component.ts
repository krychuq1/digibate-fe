import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WaitingListService} from "../../services/waiting-list.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.scss']
})
export class WaitingListComponent {
  emailForm: FormGroup;
  success: boolean = false;
  constructor(private fb: FormBuilder,
              private waitingListService: WaitingListService,
              private toastr: ToastrService) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]]
    });
  }

  getEmailErrorMessage() {
    const emailControl = this.emailForm.get('email');

    if (emailControl && emailControl.errors) {
      if (emailControl.errors['required']) {
        return 'You must enter a value';
      }
      if (emailControl.errors['email']) {
        return 'Not a valid email';
      }
    }
    return '';
  }
  onSubmit() {
    this.waitingListService.addToWaitingList(this.emailForm.value.email).subscribe({next: (r: any) => {
    this.success = true;
    this.toastr.success('You have been added to the waiting list', 'Success');
      },
      error: (e: any) => {
      this.toastr.error('something went wrong', 'Error');
      this.success = false;
    }
  });
  }
}
