import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ɵparseCookieValue } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public clientId = 'nemo-application'
  public redirectUri = 'http://localhost:4200'

  constructor(private _http: HttpClient,private _cookieService:CookieService) { }

  retrieveToken(code) {
    let params = new URLSearchParams();
    params.append('grant_type','authorization_code');
    params.append('client_id', this.clientId);
    params.append('client_secret', '83b3b0cf-453c-45c9-89b9-08c7f050620c');
    params.append('redirect_uri', this.redirectUri);
    params.append('code',code);

    let headers =
      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

      this._http.post('http://localhost:8080/auth/realms/Nemo-Realme/protocol/openid-connect/token',
        params.toString(), { headers: headers })
        .subscribe(
          data => this.saveToken(data),
          err => alert('Invalid Credentials'));
  }
  saveToken(token) {
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    this._cookieService.set("access_token", token.access_token, expireDate);
    console.log('Obtained Access token');
    window.location.href = this.redirectUri;
  }
  getResource(resourceUrl) : Observable<any> {
    var headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer '+this._cookieService.get('access_token')});
    return this._http.get(resourceUrl, { headers: headers });
  }
  checkCredentials(){
    return this._cookieService.check("access_token");
  }
  logout(){
    this._cookieService.delete("access_token");
    window.location.reload();
  }
}
