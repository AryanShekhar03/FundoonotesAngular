import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<CollaboratorComponent>,  @Inject(MAT_DIALOG_DATA) public data: any) { }
  

  ngOnInit(): void {
    console.log('Firstname:' +localStorage.getItem('Firstname'));
    // localStorage.setItem('Firstname' , JSON.stringify(this.register.value.firstName))
    //     localStorage.setItem('lastName' , JSON.stringify(this.register.value.lastName))
    //     localStorage.setItem('userName' , JSON.stringify(this.register.value.userName))
  }

  closeDialog(){
    this.dialogRef.close(CollaboratorComponent)
  }
  // localStorage.getItem('users' , JSON.stringify(this.users))
  

}
