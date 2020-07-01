import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Buyer } from './buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  private baseUrl = 'http://localhost:8080/users';

  constructor(private http:HttpClient) { }

  getBuyersList(): Observable<any> {
    return this.http.get<Buyer[]>(`${this.baseUrl}`);
  }


}
