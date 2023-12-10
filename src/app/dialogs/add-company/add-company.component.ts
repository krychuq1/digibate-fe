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
  private loadingMessages = [
    {
      h1: '🚀 Launching your request into cyberspace!',
      p: 'We are currently propelling your request at lightspeed through the digital cosmos.'
    },
    {
      h1: '🔍 Finding the digital keys to unlock your request.',
      p: 'Our digital locksmiths are at work, searching for the right key to your query.'
    },
    {
      h1: '🌐 Spinning the web to catch your data.',
      p: 'Our web weavers are intricately crafting the nets to capture the information you need.'
    },
    {
      h1: '⏳ Just a bit more, weaving through the net.',
      p: 'We are almost there, delicately threading through the vast web of data.'
    }
    // Add more objects as needed
  ];
  loadingMessage = {h1: '', p: ''};
  private messageIndex = 0;
  private messageInterval: any;
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
      this.startLoadingMessages();
      this.loading = true;
      const url: string = this.urlForm.getRawValue().url!;
      this.companyService.scanCompany(url).subscribe({next: (response => {
        this.loading = false;
        const data = {
          response,
          header: '🎉 Success! Here\'s the Scoop! 🌐'
        }
        this.stopLoadingMessages();
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
  startLoadingMessages() {
    this.loadingMessage = this.loadingMessages[this.messageIndex];
    this.messageInterval = setInterval(() => {
      this.messageIndex = (this.messageIndex + 1) % this.loadingMessages.length;
      this.loadingMessage = this.loadingMessages[this.messageIndex];
    }, 10000); // Change message every 10 seconds
  }
  stopLoadingMessages() {
    if (this.messageInterval) {
      clearInterval(this.messageInterval);
      this.messageIndex = 0; // Reset for next time
    }
  }
}
