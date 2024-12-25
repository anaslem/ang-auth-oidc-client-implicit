import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'AuthOidcExemple';

  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.checkAuth().subscribe((loginResponse) =>
    {
      console.log('app authenticated', loginResponse)
      if(!loginResponse.isAuthenticated)
      {
        this.authService.login();
      }
      else{
        this.authService.getUserData().subscribe((userData) => {
          console.log('User data ========>:', userData);
        });
        console.log("get data from api")
      }
    }
    );
  }
}
