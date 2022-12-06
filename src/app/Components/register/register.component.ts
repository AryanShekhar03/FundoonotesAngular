import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder, FormsModule, NgForm} from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users: any = {};
  public inputType:string = 'password';
  public showPassword(event:any):void{
    event.target.checked ? this.inputType='text':this.inputType='password';
  }

  constructor(private formBuilder: FormBuilder, private user:UserService) { }
  register!: FormGroup;
  submitted = false;
  hide = true;

  ngOnInit(): void {
    this.register = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmpassword: ['', Validators.required]
      
  }); 
  }
  get f(){return this.register.controls;}
  onSubmit() {
    this.submitted = true;
  
    // stop here if form is invalid
    if (this.register.valid) {
       console.log("valid data"+this.register.value);
       
       let data={
        firstName:this.register.value.firstName,
        lastName:this.register.value.lastName,
        email:this.register.value.userName,
        password:this.register.value.password
       
       }
       this.user.register(data).subscribe((response:any)=>{
        
        console.log(response);
        // this.users =Object.assign(this.register.value.firstName,);
        localStorage.setItem('Firstname' , JSON.stringify(this.register.value.firstName))
        localStorage.setItem('lastName' , JSON.stringify(this.register.value.lastName))
        localStorage.setItem('userName' , JSON.stringify(this.register.value.userName))
       }
       )
    }else{
      console.log("Invalid", this.register.value);
      
    }
    


    
      
    
   
    


}
}


