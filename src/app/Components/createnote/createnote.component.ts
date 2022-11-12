import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  isShow = false;
  createNoteForm!:FormGroup;
  submitted=false;

  constructor(private formbuilder:FormBuilder, private note:NotesService) { }

  ngOnInit(): void {
    this.createNoteForm=this.formbuilder.group({
      title:['',Validators.required],
      description:['',Validators.required]
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
      description:this.createNoteForm.value.description
    }
    console.log(resdata);
    this.note.addNotes(resdata).subscribe((result:any)=>{
      console.log(result);
      
    })
  }
}
onSubmit(){
  this.submitted=true;

}

  }


