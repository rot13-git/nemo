import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Hash } from './hash';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  private baseUrl = 'http://localhost:8000/hashes';

  constructor(private http:HttpClient,private _cookieService:CookieService) { }

  getHashesList(): Observable<any> {

    return this.http.get<Hash[]>(`${this.baseUrl}`);
  }

  createNewHash(url:string): Observable<any>{
    const body = {
      url
    }
    const headers = new HttpHeaders(
      {
          'Content-Type': 'application/json'
      });
    return this.http.post<Hash>(`${this.baseUrl}`+"/make",body, {headers : headers});
  }

}
