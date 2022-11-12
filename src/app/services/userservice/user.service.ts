import { Injectable } from '@angular/core';
import {HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpservice/http.service';
import { Token } from '@angular/compiler';
import { Console } from 'console';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any;

  constructor(private http:HttpService) { }
  register(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.http.postservice('https://localhost:44328/api/User/Register',data,false,header)
}
// 

login(data:any){
  console.log(data)
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
  return this.http.postservice('https://localhost:44328/api/User/AllLogin',data,false,header);
  }
  forgetpassword(data:any){
    console.log(data)
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
  return this.http.postservice('https://localhost:44328/api/User/ForgotPassword?email='+data.emailId,data,false,header);
  }

  resetpassword(data:any){
    console.log(data)
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer' + this.token
      })
    }
  return this.http.postservice('https://localhost:44328/api/User/ResetPassword',data,false,header);
  }
   

}
