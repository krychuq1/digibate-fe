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


@NgModule({
  declarations: [
    MyAccountComponent,
    SideNavComponent,
    BrandIdentityComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class MyAccountModule { }
