import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective} from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  email = new FormControl('', [
   
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Za-z0-9]{8}'),
    
  ]);
  match = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.reset;
      this.model = {
        email: '',
        password: ''
      }
  }


}
