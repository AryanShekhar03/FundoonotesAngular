import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
 noteObject:any
  @Output() NotesDisplay = new EventEmitter<string>();


  noteId:any
  archieve =false;
  trash=false;

  constructor(public notes:NotesService) { }

  ngOnInit(): void {
    
  }
  onArchive() {
    let reqData={
      NoteId:this.noteObject.noteId,
    }
    console.log(reqData)
    this.notes.ArchiveNotes(this.noteObject.noteId).subscribe((response: any) => {
      console.log("Note Archived Successfully",response);
      
    })
  }
 
  // onDelete() {

  //   let reqData={
  //     NoteId:[this.noteObject.noteId],
  //   }
  //   console.log(reqData)
  //   this.notes.TrashNotes(this.noteObject.noteId).subscribe((response: any) => {
  //     console.log("Note trash Successfully",response);
      
  //   })
    
  // }

}
