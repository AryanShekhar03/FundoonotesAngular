import { Component,  EventEmitter,  Input, OnInit, Output,  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { DataService } from 'src/app/services/dataservice/data.service';
@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  //  filteredstring: string ='';
  message : any;
  searchNote : any;
  @Input()childMessage:any;
  @Output() refreshDisplay=new EventEmitter<any>();
  @Output() messagevent=new EventEmitter<any>();
  @Output() colorchange=new EventEmitter<any>();
 
  
  

  constructor(public dialog:MatDialog,private data : DataService) { }

  ngOnInit(): void {
    console.log("Success",this.childMessage);
    
    this.data.incomingData.subscribe((res) => {
      console.log("Searching Process",res)
      this.searchNote = res;
    })
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
      // this.updatedisplay.emit(response);
    })
  }
  notearchive(event:any){
    console.log(event);
    
    this.messagevent.emit(event)
  }
  iconautorefresh(event:any){
    console.log(event);   
    this.refreshDisplay.emit(event)
  }
  colorRefresh(event:any){
   this.colorchange.emit(event)
  }

 
  
}
