import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Buyer } from './buyer';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { Hash } from './hash';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  private baseUrl = 'http://localhost:8000/users';

  constructor(private http:HttpClient,private _service:LoginService,private _cookieService:CookieService) { }

  getBuyer(): Observable<any> {
    var headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer '+this._cookieService.get('access_token')});
    return this.http.get<Buyer>(`${this.baseUrl}`, { headers: headers });
  }
  getUserHashes(pageSize:number,pageIndex:number):Observable<Hash[]>{
    var headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer '+this._cookieService.get('access_token')});
    return this.http.get<Hash[]>(`${this.baseUrl}`+"/hashes?pageNumber="+pageIndex+"&pageSize="+pageSize,{headers:headers});

  }
  createNewHash(url:string): Observable<any>{
    const body = {
      url
    }
    const headers = new HttpHeaders(
      {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this._cookieService.get('access_token')
      });
    return this.http.post<Hash>(`${this.baseUrl}`+"/create",body, {headers : headers});
  }
  createNewHashCustom(url:string,alias:string): Observable<any>{
    const body = {
      url,
      alias
    }
    const headers = new HttpHeaders(
      {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+this._cookieService.get('access_token')
      });
    return this.http.post<Hash>(`${this.baseUrl}`+"/customize",body, {headers : headers});
  }


}
