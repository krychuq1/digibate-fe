import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "./guards/auth.guard";

const routes: Routes = [{ path: 'my-account',
  loadChildren: () => import('./modules/my-account/my-account.module').then(m => m.MyAccountModule),
  canActivate: [authGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
