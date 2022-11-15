import { Component,  Input, OnInit,  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() childMessage:any;
  

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(notes:any): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '40%',
      height: 'auto',
      panelClass: 'updateDialog',
      data: notes,
    });
    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed', response);
      // this.getAllnotes.emit(response);
    })
  }
}
