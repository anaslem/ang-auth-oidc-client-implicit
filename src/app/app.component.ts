import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'AuthOidcExemple';
  currentRoute = '';

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit(): void {
   this.initAhth();
  }

  initAhth(){
    this.storeRedirectUrl(window.location.pathname + window.location.search);
    this.authService.checkAuth().subscribe((loginResponse) =>
    {
      if(!loginResponse.isAuthenticated)
      {
        this.authService.login();
      }
      else{
        this.authService.getUserData().subscribe((userData) => {
        });
        const url = this.getRedirectUrl();
        if(url === '/')
        {
          this.router.navigateByUrl('/home')
        }
        else
        {
          this.router.navigateByUrl(url);
        }
      }
    }
    );
  }

  private storeRedirectUrl (value : string) {
    localStorage.setItem("RedirectUrlKey", JSON.stringify(value));
  }

  private getRedirectUrl() {
    const path = localStorage.getItem("RedirectUrlKey") || '/';
    return JSON.parse(path);
  }
  
}
