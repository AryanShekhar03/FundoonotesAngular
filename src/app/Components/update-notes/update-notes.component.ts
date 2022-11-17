import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  title: any
  body: any
  id: any
  constructor(private notes:NotesService ,  public dialogRef: MatDialogRef<UpdateNotesComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title=data.title;
    this.body=data.body;
    this.id=data.notesId;
   }

  ngOnInit(): void {
  }
  closeDialog() {
    let reqData = {
      title: this.title,
      body: this.body,
      notesId: this.id,
    }
    this.notes.updateNotes(reqData, this.id).subscribe((response:any) =>{ 
      console.log("update response", response); 
            
    })
    this.dialogRef.close()
  }
}
  

