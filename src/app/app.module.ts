import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig} from "@abacritt/angularx-social-login";
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule} from "@angular/material/button";
import { StartComponent } from './dialogs/start/start.component';
import { ContinueEmailComponent } from './dialogs/continue-email/continue-email.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { UserInfoComponent } from './components/header/user-info/user-info.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import { AddCompanyComponent } from './dialogs/add-company/add-company.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SuccessComponent } from './dialogs/add-company/success/success.component';
import {TextFieldModule} from "@angular/cdk/text-field";
import {ToastrModule} from "ngx-toastr";
import { BrandIdentityDialogComponent } from './dialogs/add-company/brand-identity-dialog/brand-identity-dialog.component';
import {MatStepperModule} from "@angular/material/stepper";
import { WaitingListComponent } from './components/waiting-list/waiting-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    ContinueEmailComponent,
    UserInfoComponent,
    AddCompanyComponent,
    SuccessComponent,
    BrandIdentityDialogComponent,
    WaitingListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleSigninButtonModule,
    MatButtonModule,
    TextFieldModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatStepperModule

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '199019046097-ci7ircgffqrfbm5lgbu8orat98bu96o1.apps.googleusercontent.com',
              {oneTapEnabled:false, prompt:'consent'}
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
