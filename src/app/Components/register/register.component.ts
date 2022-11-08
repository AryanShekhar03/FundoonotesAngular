import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder, FormsModule, NgForm} from '@angular/forms';
// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public inputType:string = 'password';

  public showPassword(event:any):void{
    event.target.checked ? this.inputType='text':this.inputType='password';
  }
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
  //  model:any={};
  // hide = 'true';
  //  hide1 = 'true';
  // // // password;
  // // // cpassword;
  // form = new FormGroup({
  //  Username: new FormControl('', Validators.required),
  //   Firstname: new FormControl('', Validators.required),
  //    Lastname: new FormControl('', Validators.required),
  // //  Username: new FormControl('', [Validators.required, Validators.email]),
  //    passwordControl: new FormControl('', [Validators.required, Validators.minLength(6)]),
  // //   // cpassword: new FormControl('', [Validators.required, Validators.minLength(6), this.passwordMatcher.bind(this)])
  //  }
  //  );
  

  

  

  

  constructor() { }

  ngOnInit():void {
    // this.resetForm
  }
    // resetForm(form? : NgForm){
    //   if(form!=null)
    //   form.reset();
    //   this.model={
    //     Firstname:'',
    //     Lastname:'',
    //     passwordControl:'',
    //     Username:''
    //   }
    // }



    // register():void{
    //   console.log(this.model);
    // this.registerSericeObj.register(this.model)
    //                         .subscribe(response =>
    //                           data=>console.log(data));
    //                          alert("Registered Successfully..");
    
      
    
   
    


  }


