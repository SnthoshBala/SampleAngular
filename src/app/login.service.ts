import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'Models/Login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  req:string="https://localhost:44378/api/Authorization/AdminLogin";
  constructor(private http:HttpClient) { }

  Login(login:Login):Observable<any>
  {
    return this.http.post(this.req,login,
      {
        headers: new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*',    
          'Accept': 'text/html, application/xhtml+xml, */*'
    }),responseType:'text'}
    )}
}
