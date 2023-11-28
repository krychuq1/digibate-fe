import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import {MatButtonModule} from "@angular/material/button";
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    MatButtonModule
  ]
})
export class MyAccountModule { }
