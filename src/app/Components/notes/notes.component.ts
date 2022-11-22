import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Output() changeNoteEvent = new EventEmitter<string>();
  @Output() displayicons = new EventEmitter<string>();
  noteArray:any;
  // noteId:any;

  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes(){
    this.note.getNotes().subscribe((response:any)=>{
      // console.log(response);
      this.noteArray=response;
      this.noteArray=this.noteArray.reverse()
      this.noteArray = this.noteArray.filter((object: any) => {
            return object.archieve == false && object.delete == false;
        
            })
    
     console.log(this.noteArray)
    })
    }
    receiveMessage($event: any) {
      console.log($event);
      this.getAllNotes();
    }
    updatedicon($event:any) {
      console.log($event);
      this.getAllNotes();
    }
    receiveMessagearchive($event:any){
      console.log($event);
      this.getAllNotes();
    }
    iconRefresh($event:any){
      console.log($event)
      this.getAllNotes();
    }
    autocreatenote($event:any){
     console.log($event)
     this.getAllNotes();
    }
  // getAllNotes(){
  //   this.notes.getNotes().subscribe((response:any)=>{
  //     this.noteArray=response;
  //    console.log(this.noteArray)
  //   })
  //   }
  //   receiveMeassage(e:any){
  //     console.log(e);
  //   this.getAllNotes();
  //   }

    

}
