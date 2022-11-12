import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getservice(url:any, token:boolean=false, option:any){
    return this.httpClient.get(url, token && option);
   }
  constructor(private httpClient:HttpClient) { }
  postservice(url:any, data:any, token:boolean=false, option:any){
   return this.httpClient.post(url,data,token && option);
  }
  putservice(url:any, data:any, token:boolean=false, option:any){
    return this.httpClient.put(url,data,token && option);
   }
}

  

