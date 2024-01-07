import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import {MatButtonModule} from "@angular/material/button";
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrandIdentityComponent } from './brand-identity/brand-identity.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { RecentContentComponent } from './recent-content/recent-content.component';
import { SuggestedForYouComponent } from './suggested-for-you/suggested-for-you.component';
import { ContinueWhereLeftComponent } from './continue-where-left/continue-where-left.component';
import { CreateNavComponent } from './side-nav/create-nav/create-nav.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    SideNavComponent,
    BrandIdentityComponent,
    RecentContentComponent,
    SuggestedForYouComponent,
    ContinueWhereLeftComponent,
    CreateNavComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ]
})
export class MyAccountModule { }
