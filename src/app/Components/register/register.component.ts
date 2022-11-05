import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder, FormsModule} from '@angular/forms';
// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model:any={};

  Firstname = new FormControl('', [
    Validators.required,
    Validators.pattern('[/[A-Z]{1}[a-z]{2,}/;'),
   ]);

   Lastname = new FormControl('', [
    Validators.required,
    Validators.pattern(' /[A-Z]{1}[a-z]{2,}/;'),
   ]);

   Username = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern('.{4,12}'),
  ]);

  // mobileControl = new FormControl('',[
  //   Validators.required,
  //   //Validators.pattern("[0-9]{0-10}")
  // ]);

  

  

  

  constructor() { }

  ngOnInit():void {
   
    }


}
