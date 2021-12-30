import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
    
  public addUser(user:any)
  {
     return this.http.post(`${environment.baseurl}user/`,user)
  }

}
