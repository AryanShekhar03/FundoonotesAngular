import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  @Output()messageEvent = new EventEmitter<any>();
  
  isShow = false;
  createNoteForm!:FormGroup;
  submitted=false;

  constructor(private formbuilder:FormBuilder, private note:NotesService ,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.createNoteForm=this.formbuilder.group({
      title:['',Validators.required],
      body:['',Validators.required]
    });
  }
  show() {
    this.isShow = true;
  }
  close() {
  this.isShow = false;
  this.submitted=true;
  if(this.createNoteForm.valid){
    console.log("notes created successfully");
    let resdata={
      title:this.createNoteForm.value.title,
      body:this.createNoteForm.value.body
    }
    console.log(resdata);
    this.note.addNotes(resdata).subscribe((result:any)=>{
      console.log(result);
      this.messageEvent.emit(result)
      this.snackBar.open("Note Created", "OK", {
        duration:4000,
      
    })
  })
  }
}
onSubmit(){
  this.submitted=true;

}
receivemessage(event:any){
  this.messageEvent.emit(event)

}

  }


