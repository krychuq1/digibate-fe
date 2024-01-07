import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateContentRoutingModule } from './create-content-routing.module';
import { CreateDashboardComponent } from './create-dashboard/create-dashboard.component';


@NgModule({
  declarations: [
    CreateDashboardComponent
  ],
  imports: [
    CommonModule,
    CreateContentRoutingModule
  ]
})
export class CreateContentModule { }
