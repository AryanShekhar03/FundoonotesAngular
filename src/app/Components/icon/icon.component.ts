import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
 @Input()noteObject:any
 @Output() changeNoteEvent = new EventEmitter<string>();
 

 isArchieve: boolean = false;
  isTrash: boolean = false;


  colorArray= [{colorCode:"Red"},
  {colorCode:"Orange"},
  {colorCode:"Yellow"},
  {colorCode:"Green"},
  {colorCode:"Teal"},
  {colorCode:"Blue"},
  {colorCode:"Dark Blue"},
  {colorCode:"Purple"},
  {colorCode:"pink"},
  {colorCode:"Brown"},
  {colorCode:"Gray"}];
  // {colorCode:"olive"}];
  
  
  noteListId:any;
  // noteId=any;
  // archieve : boolean = false;
  // trash: boolean = false;
  constructor(public note:NotesService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let component = this.route.snapshot.component;
    if (component == TrashComponent) {
      this.isTrash = true;
    }
    if (component == ArchiveComponent) {
      this.isArchieve = true;
    }
  }  
  
  onArchive() {
  
    let reqData={
      NotesId:[this.noteObject.noteId],
    }
    console.log(reqData);
    this.note.ArchiveNotes(this.noteObject.notesId).subscribe((response: any) => {
      console.log("Note Archived Successfully",response);
      
    })
  }


 
  onDelete() {

    let reqData={
      NotesID:[this.noteObject.noteId],
    }
    console.log(reqData)
    this.note.TrashNotes(this.noteObject.noteId).subscribe((response: any) => {
      console.log("Note trash Successfully",response);
      
    })
    
   }
   selectColor(color:any)
   {
     this.noteListId = this.noteObject.color = color;
     let reqData = {
       color: color,
       notesId:this.noteObject.notesId,      
     };
     this.note.NotesColor(reqData).subscribe((response: any) => {
       console.log(response);
       this.changeNoteEvent.emit(response);
      
       console.log("color", reqData)
     })
   }  
   UnArchieve() {
    this.note.ArchiveNotes(this.noteObject.notesId).subscribe((response: any) => {
      console.log("note unarchieve", response);
    })
  }
 
 

   

  }
