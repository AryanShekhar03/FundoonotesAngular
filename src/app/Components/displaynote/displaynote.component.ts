import { Component,  EventEmitter,  Input, OnInit, Output,  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
   filteredstring: string ='';
  @Input()childMessage:any;
  @Output() changeNoteEvent = new EventEmitter<string>();
  @Output() updatedisplay = new EventEmitter<string>();
  @Output() messageEvent = new EventEmitter<string>();
  @Output()IsTrash=new EventEmitter<string>();
  @Output()UnArchieve=new EventEmitter<string>();
  

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
      this.updatedisplay.emit(response);
    })
  }
  recieveArchiveNote($event: any) {
    this.changeNoteEvent.emit($event);
  }
  iconRefresh($event: any) {
    console.log($event);
    this.changeNoteEvent.emit($event)
  }
  RestoreTrashNotes(event:any){
    this.IsTrash.emit(event)
  }
  Unarchievenote(event:any){
    this.UnArchieve.emit(event)
  }
  
}
