import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router
  ) {}

  canActivate(): boolean {
    // Check if the user is authenticated
    const isAuthenticated = this.oidcSecurityService.isAuthenticated().subscribe;
    console.log("check in guard "+ JSON.stringify(isAuthenticated));
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      this.router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  }
}
