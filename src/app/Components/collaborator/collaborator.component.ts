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

  Selectemail(value:any){
    console.log(value);
  }

  constructor( public dialogRef: MatDialogRef<CollaboratorComponent>,  @Inject(MAT_DIALOG_DATA) public data: any,public note:NotesService) { }
  

  ngOnInit(): void {
    
    // console.log('Firstname:' +localStorage.getItem('Firstname'));
    // localStorage.setItem('Firstname' , JSON.stringify(this.register.value.firstName))
    //     localStorage.setItem('lastName' , JSON.stringify(this.register.value.lastName))
    //     localStorage.setItem('userName' , JSON.stringify(this.register.value.userName))
  }

  closeDialog(){
    this.dialogRef.close(CollaboratorComponent)
  }
  // localStorage.getItem('users' , JSON.stringify(this.users))
  
  addCollab(){
    this.note.addCollab(this.noteObject.notesId).subscribe((response: any) => {
      console.log("collab Successfully",response);
        console.log(response)
        // this.TrashNotes.emit(response);
    })

      
}
}
