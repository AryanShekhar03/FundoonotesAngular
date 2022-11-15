import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteservice/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  // trashList:any;

  constructor() { }

  ngOnInit(): void {
    // this.TrashList();
  }


}
