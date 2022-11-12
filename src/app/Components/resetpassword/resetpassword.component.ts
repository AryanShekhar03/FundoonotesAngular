import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpassword!: FormGroup;
  submitted = false;
  



  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.resetpassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      cpassword: ['', [Validators.required, Validators.minLength(4)]]
    }
      );
  }

  get f(){return this.resetpassword.controls;}
  onSubmit() {
    this.submitted = true;
  
    
    if (this.resetpassword.valid) {
      console.log("valid data"+this.resetpassword.value);
     
      let data={
        
       password:this.resetpassword.value.password
      
      }
      this.user.resetpassword(data).subscribe((response:any)=>{
       
       console.log(response);
      }
      )
   }else{
     console.log("Invalid", this.resetpassword.value);
     
   }
    }

}
