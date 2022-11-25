import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  // @Output()messageEvent = new EventEmitter<any>();
  trashList:any;
  // trash:boolean=false;
  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.TrashList();
  }

  TrashList(){
    this.note.getNotes().subscribe((response:any)=>{
      this.trashList=response;
      // console.log(this.trashList);
      this.trashList.reverse();
      this.trashList=this.trashList.filter((object:any)=>{
       return object.delete==true ;
      })
      console.log("trash notes ",this.trashList);
      // this.messageEvent.emit(response)
     })
    }
   
    receivemessage($event:any){
      console.log($event);
      this.TrashList();
     }
  
  }



