import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any

  constructor(private http:HttpService) { 
    this.token=localStorage.getItem('token')
  }
  addNotes(data:any){
    console.log(data,this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.postservice('https://localhost:44328/api/Notes/CreateNotes',data,true,header);
   }
   getNotes(){
    
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.getservice('https://localhost:44328/api/Notes/GetAll',true,header);
   }
   updateNotes(data:any, notesId:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.putservice('https://localhost:44328/api/Notes/Update?NotesID='+notesId,data,true,header);
   }
   ArchiveNotes(data:any ){
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.putservice('https://localhost:44328/api/Notes/Archieve?NotesId='+data,{},true,header);
   }
   TrashNotes(data:any){
    console.log(data);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.putservice('https://localhost:44328/api/Notes/TrashNotes?NotesID='+data,{},true,header);
   }
   NotesColor(data:any ){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.http.putservice(`https://localhost:44328/api/Notes/Color?NotesId=${data.notesId}&color=${data.color}`,{},true,header)
  }
  DeleteNotes(data:any){
    console.log(data);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.Deleteservice('https://localhost:44328/api/Notes/DeleteNotes?NotesID='+data,{},true,header);
   }

   
}
