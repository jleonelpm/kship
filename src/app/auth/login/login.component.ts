import { Component, EventEmitter, inject, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  });


 
 
  status:string='init';
 
  submitted:boolean=false;

  showPassword:boolean=false;

  authService = inject(AuthService);

   user?:User;

  constructor(private fb:FormBuilder, private router:Router){


  }
  
  ngOnInit(): void {
   
  }

  doLogin(){
    this.submitted=true;
    if(this.loginForm.valid){
      this.status='loading';
      const{email,password} = this.loginForm.getRawValue();
       
      this.authService.login(email,password).subscribe(data=>{
        this.user=data;
        console.log(this.user);
      });
      

    }
    else{
      console.log("onvalia");
      this.loginForm.markAllAsTouched();
    }
  }

 isInvalid(name:string){
  const control = this.loginForm.get(name);
    return control?.invalid && control.touched;
 }

 hasError(name: string, errorCode: string) {
  const control = this.loginForm.get(name);
  return control?.hasError(errorCode) && control.touched;
}

}
