import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oidcSecurityService: OidcSecurityService) {}

  checkAuth(): Observable<any> {
    return this.oidcSecurityService.checkAuthIncludingServer();
  }

  login(){
    this.oidcSecurityService.authorize();
  }

  getUserData(){
    return this.oidcSecurityService.userData$;
  }
}
