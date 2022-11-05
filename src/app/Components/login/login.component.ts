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

  emailControl = new FormControl('', [
    //Validators.pattern("^[\\w\\d._-]+@[\\w\\d.-]+\\.[\\w\\d]{2,6}$"),
    // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    // Validators.minLength(5),
    // Validators.maxLength(8),
    //Validators.pattern('.{4,12}'),
    Validators.pattern('[A-Za-z0-9]{8}'),
    //Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
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
