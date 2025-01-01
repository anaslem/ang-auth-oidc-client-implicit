import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AuthOidcExemple';
  redirectUrlKey = 'RedirectUrlKey';
  isAfterLogin = 'isAfterLogin';

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.initAhth();
  }

  initAhth() {
    this.authService.checkAuth().subscribe((loginResponse) => {
      if (!loginResponse.isAuthenticated) {
        this.storeRedirectUrl(
          window.location.pathname + window.location.search
        );
        this.authService.login();
      } else {
        this.authService.getUserData().subscribe((userData) => {});
        this.HandleRedirect();
      }
    });
  }

  private HandleRedirect() {
    const isfterLogin = localStorage.getItem(this.isAfterLogin);
    const url =
      isfterLogin === '1'
        ? this.getRedirectUrl()
        : window.location.pathname + window.location.search;
    localStorage.removeItem(this.isAfterLogin);
    if (url === '/') {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl(url);
    }
  }
  private storeRedirectUrl(value: string) {
    localStorage.setItem(this.redirectUrlKey, JSON.stringify(value));
    localStorage.setItem(this.isAfterLogin, '1');
  }

  private getRedirectUrl() {
    const path = localStorage.getItem(this.redirectUrlKey) || '/';
    return JSON.parse(path);
  }
}
