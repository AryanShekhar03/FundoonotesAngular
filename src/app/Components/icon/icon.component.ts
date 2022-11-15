import { Component, Input, OnInit, Output } from '@angular/core';
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
 isArchieve: boolean = false;
  isTrash: boolean = false;


  colorArray= [{colorCode:"maroon"},
  {colorCode:"silver"},
  {colorCode:"Yellow"},
  {colorCode:"Purple"},
  {colorCode:"pink"},
  {colorCode:"chocolate"},
  {colorCode:"Wheat"},
  {colorCode:"indigo"},
  {colorCode:"hotpink"},
  {colorCode:"lightblue"},
  {colorCode:"green"},
  {colorCode:"olive"}];
  
  
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
      NotesID:[this.noteObject.notesId],
    }
    console.log(reqData);
    this.note.ArchiveNotes(this.noteObject.notesId).subscribe((response: any) => {
      console.log("Note Archived Successfully",response);
      
    })
  }


 
  onDelete() {

    let reqData={
      NotesID:[this.noteObject.notesId],
    }
    console.log(reqData)
    this.note.TrashNotes(this.noteObject.notesId).subscribe((response: any) => {
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
      
       console.log("color", reqData)
     })
   }   
 }

   


