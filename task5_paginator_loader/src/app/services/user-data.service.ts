import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url="https://api.review.sharajman.com/external-api/employees";
  constructor(private http:HttpClient) { }
  users(){
    
    return this.http.get(this.url)
  }
}
