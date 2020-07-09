import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = false;

  constructor(private _service: LoginService) { }

  ngOnInit() {
    this.isLoggedIn = this._service.checkCredentials();
    let i = window.location.href.indexOf('code');
    if(!this.isLoggedIn && i != -1) {
      this._service.retrieveToken(window.location.href.substring(i + 5));
    }
  }
  login() {
    window.location.href =
      "http://localhost:8080/auth/realms/Nemo-Realme/protocol/openid-connect/auth?response_type=code&scope=openid&client_id=" +
         this._service.clientId + '&redirect_uri='+ this._service.redirectUri;
  }
  logout() {
    this._service.logout();
  }
}
