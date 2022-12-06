import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  
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
    autocreatenote(event:any){
      console.log(event);
      this.getAllNotes();
    }
    autodispalay(event:any){
      console.log(event);
      
      this.getAllNotes();
    }
    autoarchive(event:any){
      console.log(event);
      this.getAllNotes();
    }
    iconrefresh(event:any){
      console.log(event);
      this.getAllNotes();
    }

    

}
