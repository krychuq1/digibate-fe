import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component';
import {BrandIdentityComponent} from "./brand-identity/brand-identity.component";

const routes: Routes = [{ path: '', component: MyAccountComponent,
  children: [{path: 'brand-identity', component: BrandIdentityComponent}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
