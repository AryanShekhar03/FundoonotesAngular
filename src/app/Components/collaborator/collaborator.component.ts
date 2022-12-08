import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/noteservice/notes.service';


@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  // First :string;
  myControl = new FormControl('');
  options : string[] = ['Aaryashekhar12@gmail.com',
    'ShubhamKumar@gmail.com',
    'RajeshKumar@gmail.com',
    'Rajkumar@gmail.com',
    'Sumitkumar@gmail.com',
    'Vishalkumar@gmail.com',
    'sk@gmail.com',
    'AS@GMAIL.COM',
    'ShreyaKumar@gmail.com',
    'RajeshK@gmail.com',
    'Mishi@gmail.com',
    'Shikhar@gmail.com',
    'hello@gmail.com',];
  
  @Input()noteObject:any

  // Selectemail(value:any){
  //   console.log(value);
  // }

 
  
  constructor( public dialogRef: MatDialogRef<CollaboratorComponent>,  @Inject(MAT_DIALOG_DATA) public data: any,public note:NotesService) { }
  
  First =(localStorage.getItem("Firstname"));
  last = (localStorage.getItem("lastName"));
  user =(localStorage.getItem("userName"));
              
  ngOnInit(): void {
    
     
  }

  closeDialog(){
    this.dialogRef.close(CollaboratorComponent)
  }
  
  
  addCollab(){
    let reqData={
      NotesId:[this.noteObject.notesID],
      collabEmail:[this.noteObject.options]
    }
    this.note.addCollab(reqData).subscribe((response: any) => {
      console.log("collab Successfully",response);
        console.log(response)
        console.log(this.noteObject.notesId);
        // this.TrashNotes.emit(response);
    })

      
}
}
