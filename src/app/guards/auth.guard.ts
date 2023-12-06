import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user.service";

export const authGuard: CanActivateFn = (route, state) => {

  return inject(UserService).isLogged;
};
