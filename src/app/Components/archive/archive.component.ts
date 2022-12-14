import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  @Output()messageEvent = new EventEmitter<any>();
  archiveList: any;
  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.getArchiveNotes();
  }
  getArchiveNotes(){
    this.note.getNotes().subscribe((response:any)=>{
      this.archiveList=response;
      // console.log(this.archiveList);
      this.archiveList.reverse();
      this.archiveList=this.archiveList.filter((object:any)=>{
       return object.archieve==true;
      })
      console.log("Archive notes ",this.archiveList);
      // this.messageEvent.emit(response)
     })
  } 
  
  recivemsg(event:any){
    console.log(event);
    this.getArchiveNotes();
  }}
   
 


