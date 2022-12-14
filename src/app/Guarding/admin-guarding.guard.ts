import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountServiceService } from '../Services/account-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardingGuard implements CanActivate {
  constructor( private router:Router ,private account:AccountServiceService)
  {
  }
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.account.isAdminLoggedIn()){
        return true;
      }
      this.router.navigate(['admin'])
        return false;
    }
  
}
