import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  noteArray:any;

  constructor(private notes:NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes(){
    this.notes.getNotes().subscribe((response:any)=>{
      this.noteArray=response;
     console.log(this.noteArray)
    })
    }
    receiveMeassage(e:any){
      console.log(e);
    this.getAllNotes();
    }

}
