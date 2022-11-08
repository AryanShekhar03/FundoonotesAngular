import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  model: any = {};
  password = new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Za-z0-9]{8}'),
    
  ]);



  constructor() { }

  ngOnInit(): void {
  }

}
