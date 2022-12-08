import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
   @Output() noteUpdated= new EventEmitter<any>();
  // @Output() updaterefresh=new EventEmitter<any>();
  title: any
  body: any
  id: any
  constructor(private notes:NotesService ,  public dialogRef: MatDialogRef<UpdateNotesComponent>,  @Inject(MAT_DIALOG_DATA) public data: any,private snackBar: MatSnackBar) {
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
       this.noteUpdated.emit(response);
        this.snackBar.open("Note Updated", "OK", {
          duration:4000,
      // this.updaterefresh.emit(response);
            
    })
  })
  
    this.dialogRef.close()
  }
  Reload(event:any){
    console.log(event);
  }
    
}
  

