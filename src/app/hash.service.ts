import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Hash } from './hash';

@Injectable({
  providedIn: 'root'
})
export class HashService {
  private baseUrl = 'http://localhost:8080/hashes';

  constructor(private http:HttpClient) { }

  getHashesList(): Observable<any> {
    return this.http.get<Hash[]>(`${this.baseUrl}`);
  }


}
