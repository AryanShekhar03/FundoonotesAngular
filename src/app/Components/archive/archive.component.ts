import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archiveList: any;
  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.getArchiveNotes();
  }
  getArchiveNotes(){
     
     this.note.getNotes().subscribe((response:any)=>{
       this.archiveList=response.data;
       console.log(this.archiveList);
      //  this.archiveList.reverse();
      //  this.archiveList=this.archiveList.filter((object:any)=>{
      //   return object.archieve==true;
       })
       console.log("Archive notes ",this.archiveList);
      
   }
 

}
