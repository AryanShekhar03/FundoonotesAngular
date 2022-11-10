import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetpassword!: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.forgetpassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
      });
  }
  get f(){return this.forgetpassword.controls;}
  onSubmit() {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.forgetpassword.valid) {
      console.log("valid data"+this.forgetpassword.value);
      
      let data={
       
       email:this.forgetpassword.value.email
      
      }
      this.user.forgetpassword(data).subscribe((response:any)=>{
       
       console.log(response);
      }
      )
    }else{
      console.log("Invalid", this.forgetpassword.value);
      
    }
  
    }
  

}
