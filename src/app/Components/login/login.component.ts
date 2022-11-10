import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, FormBuilder} from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material';
// import { NgForm } from '@angular/forms';
// import { ErrorStateMatcher } from '@angular/material/core';
// import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
      });
    
  }
  get f(){return this.login.controls;}
  onSubmit() {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.login.valid) {
      console.log("valid data"+this.login.value);
      
      let data={
       
       email:this.login.value.email,
       password:this.login.value.password
      
      }
      this.user.login(data).subscribe((response:any)=>{
       
       console.log("response",response.data);
       localStorage.setItem('token',response.data)
      }
      )
    }else{
      console.log("Invalid", this.login.value);
      
    }
  
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.login.value));
  }
  
  


}


